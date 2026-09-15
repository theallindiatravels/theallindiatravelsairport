import { useEffect, useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { waLink, site } from '@/data/site';
import OpenStreetMapPlaceInput, { Coordinates } from '@/components/OpenStreetMapPlaceInput';
import { getDrivingRoute } from '@/lib/osrm';

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    vehicle: 'Sedan',
  });
  const [pickupCoordinates, setPickupCoordinates] = useState<Coordinates | null>(null);
  const [dropCoordinates, setDropCoordinates] = useState<Coordinates | null>(null);
  const [route, setRoute] = useState<{ distanceKm: number; durationMinutes: number } | null>(null);

  useEffect(() => {
    if (!pickupCoordinates || !dropCoordinates) {
      setRoute(null);
      return;
    }
    let active = true;
    getDrivingRoute(pickupCoordinates, dropCoordinates)
      .then((result) => {
        if (active) setRoute(result);
      })
      .catch(() => {
        if (active) setRoute(null);
      });
    return () => {
      active = false;
    };
  }, [pickupCoordinates, dropCoordinates]);

  const routeDetails = route
    ? `\nEstimated distance: ${route.distanceKm.toFixed(1)} km\nEstimated duration: ${route.durationMinutes} minutes`
    : '';
  const message = `Hi, I want to book a cab.\n\nName: ${form.name}\nPhone: ${form.phone}\nPickup: ${form.pickup}\nDrop: ${form.drop}\nDate: ${form.date}\nVehicle: ${form.vehicle}${routeDetails}`;

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
          <MessageCircle className="w-4 h-4 text-primary-700" />
        </div>
        <h3 className="text-lg font-bold text-gray-900">Instant Cab Enquiry</h3>
      </div>
      <p className="text-sm text-gray-500 mb-5">Fill in your trip details to get an instant quote on WhatsApp.</p>

      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="input-field text-sm"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="input-field text-sm"
          />
        </div>
        <OpenStreetMapPlaceInput
          placeholder="Pickup Location"
          value={form.pickup}
          onChange={(pickup) => setForm({ ...form, pickup })}
          onSelect={setPickupCoordinates}
          className="input-field text-sm"
        />
        <OpenStreetMapPlaceInput
          placeholder="Drop Destination"
          value={form.drop}
          onChange={(drop) => setForm({ ...form, drop })}
          onSelect={setDropCoordinates}
          className="input-field text-sm"
        />
        {route && (
          <p className="text-xs text-gray-500">
            Estimated driving distance: <span className="font-semibold text-gray-700">{route.distanceKm.toFixed(1)} km</span>
            {' · '}
            {route.durationMinutes} minutes
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="input-field text-sm"
          />
          <select
            value={form.vehicle}
            onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
            className="input-field text-sm"
          >
            <option>Sedan</option>
            <option>SUV / Innova</option>
            <option>Tempo Traveller</option>
          </select>
        </div>
        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp w-full"
        >
          <MessageCircle className="w-5 h-5" /> Get Instant Quote
        </a>
        <a href={`tel:${site.phoneRaw}`} className="btn-secondary w-full">
          <Phone className="w-4 h-4" /> Call to Book
        </a>
      </div>
    </div>
  );
}
