import type { Coordinates } from '@/components/OpenStreetMapPlaceInput';

export async function getDrivingRoute(from: Coordinates, to: Coordinates) {
  const url = `https://router.project-osrm.org/route/v1/driving/${from.longitude},${from.latitude};${to.longitude},${to.latitude}?overview=false`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`OSRM request failed with status ${response.status}`);
  const data = (await response.json()) as {
    code: string;
    routes?: Array<{ distance: number; duration: number }>;
  };
  if (data.code !== 'Ok' || !data.routes?.[0]) throw new Error('OSRM could not find a driving route');
  return {
    distanceKm: data.routes[0].distance / 1000,
    durationMinutes: Math.round(data.routes[0].duration / 60),
  };
}
