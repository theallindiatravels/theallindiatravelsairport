import { LocateFixed } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export interface Coordinates {
  latitude: number;
  longitude: number;
}

interface SearchResult extends Coordinates {
  display_name: string;
}

interface OpenStreetMapPlaceInputProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onSelect?: (place: Coordinates | null) => void;
  enableCurrentLocation?: boolean;
  className?: string;
}

export default function OpenStreetMapPlaceInput({
  value,
  placeholder,
  onChange,
  onSelect,
  enableCurrentLocation = false,
  className,
}: OpenStreetMapPlaceInputProps) {
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState('');
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const query = value.trim();
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    const timeout = window.setTimeout(async () => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      setIsLoading(true);

      try {
        const params = new URLSearchParams({
          q: query,
          format: 'jsonv2',
          addressdetails: '1',
          limit: '5',
          countrycodes: 'in',
        });
        const response = await fetch(`https://nominatim.openstreetmap.org/search?${params}`, {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
        });
        if (!response.ok) throw new Error(`Nominatim request failed with status ${response.status}`);
        const results = (await response.json()) as Array<{ display_name: string; lat: string; lon: string }>;
        setSuggestions(
          results.map((result) => ({
            display_name: result.display_name,
            latitude: Number(result.lat),
            longitude: Number(result.lon),
          })),
        );
      } catch (error: unknown) {
        if (!(error instanceof DOMException && error.name === 'AbortError')) {
          console.warn('OpenStreetMap address search is unavailable.', error);
          setSuggestions([]);
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }, 500);

    return () => window.clearTimeout(timeout);
  }, [value]);

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError('Location is not supported by this browser.');
      return;
    }

    setIsLocating(true);
    setLocationError('');
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const params = new URLSearchParams({
            lat: String(coords.latitude),
            lon: String(coords.longitude),
            format: 'jsonv2',
            zoom: '18',
            addressdetails: '1',
          });
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?${params}`, {
            headers: { Accept: 'application/json' },
          });
          if (!response.ok) throw new Error(`Nominatim request failed with status ${response.status}`);
          const result = (await response.json()) as { display_name?: string };
          if (!result.display_name) throw new Error('No address was found for this location');
          onChange(result.display_name);
          onSelect?.({ latitude: coords.latitude, longitude: coords.longitude });
          setSuggestions([]);
        } catch (error: unknown) {
          console.warn('OpenStreetMap reverse geocoding is unavailable.', error);
          setLocationError('Could not find an address for your location.');
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        setIsLocating(false);
        setLocationError(
          error.code === error.PERMISSION_DENIED
            ? 'Allow location access in your browser to use this option.'
            : 'Could not detect your location. Please enter it manually.',
        );
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 },
    );
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
          onSelect?.(null);
        }}
        onBlur={() => window.setTimeout(() => setSuggestions([]), 150)}
        className={className}
        autoComplete="off"
        aria-autocomplete="list"
      />
      {enableCurrentLocation && (
        <button
          type="button"
          onClick={useCurrentLocation}
          disabled={isLocating}
          className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-primary-700 hover:text-primary-800 disabled:cursor-wait disabled:opacity-60"
        >
          <LocateFixed className="h-3.5 w-3.5" />
          {isLocating ? 'Detecting your location...' : 'Use my current location'}
        </button>
      )}
      {locationError && <p className="mt-1 text-xs text-red-600">{locationError}</p>}
      {(isLoading || suggestions.length > 0) && (
        <div className="absolute left-0 right-0 top-full z-30 mt-1 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
          {isLoading && <div className="px-4 py-3 text-sm text-gray-500">Searching OpenStreetMap...</div>}
          {suggestions.map((suggestion) => (
            <button
              key={`${suggestion.latitude}-${suggestion.longitude}-${suggestion.display_name}`}
              type="button"
              className="block w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-primary-50"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => {
                onChange(suggestion.display_name);
                onSelect?.(suggestion);
                setSuggestions([]);
              }}
            >
              {suggestion.display_name}
            </button>
          ))}
          <div className="border-t border-gray-100 px-4 py-1.5 text-[10px] text-gray-400">
            Address data © OpenStreetMap contributors
          </div>
        </div>
      )}
    </div>
  );
}
