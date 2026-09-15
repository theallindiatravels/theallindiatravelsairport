import { useEffect, useRef } from 'react';

interface PlaceResult {
  formatted_address?: string;
}

interface AutocompleteInstance {
  addListener: (eventName: 'place_changed', handler: () => void) => void;
  getPlace: () => PlaceResult;
}

interface GoogleMapsApi {
  maps: {
    places: {
      Autocomplete: new (
        input: HTMLInputElement,
        options: { componentRestrictions: { country: string }; fields: string[] },
      ) => AutocompleteInstance;
    };
  };
}

declare global {
  interface Window {
    google?: GoogleMapsApi;
  }
}

let googleMapsPromise: Promise<void> | null = null;

function loadGoogleMaps() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;
  if (!apiKey || window.google?.maps?.places) return Promise.resolve();
  if (googleMapsPromise) return googleMapsPromise;

  googleMapsPromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector('script[data-google-maps]');
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('Google Maps failed to load')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.dataset.googleMaps = 'true';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Google Maps failed to load'));
    document.head.appendChild(script);
  });

  return googleMapsPromise;
}

interface GooglePlaceInputProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function GooglePlaceInput({ value, placeholder, onChange, className }: GooglePlaceInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    let active = true;
    loadGoogleMaps()
      .then(() => {
        if (!active || !inputRef.current || !window.google?.maps?.places) return;
        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
          componentRestrictions: { country: 'in' },
          fields: ['formatted_address'],
        });
        autocomplete.addListener('place_changed', () => {
          const address = autocomplete.getPlace().formatted_address;
          if (address) onChangeRef.current(address);
        });
      })
      .catch((error: unknown) => {
        console.warn('Google Places autocomplete is unavailable.', error);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={className}
      autoComplete="off"
    />
  );
}
