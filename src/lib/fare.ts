export type VehicleType = 'Sedan' | 'SUV / Innova' | 'Tempo Traveller';
export type TripType = 'Inside City' | 'One Way' | 'Round Trip';

const rates: Record<Exclude<VehicleType, 'Tempo Traveller'>, Record<TripType, number>> = {
  Sedan: { 'Inside City': 30, 'One Way': 15, 'Round Trip': 14 },
  'SUV / Innova': { 'Inside City': 45, 'One Way': 22, 'Round Trip': 20 },
};

export function estimateFare(distanceKm: number, vehicle: VehicleType, tripType: TripType) {
  if (vehicle === 'Tempo Traveller') return null;

  const billableDistanceKm = tripType === 'Inside City'
    ? Math.max(10, Math.ceil(distanceKm / 10) * 10)
    : tripType === 'Round Trip'
      ? distanceKm * 2
      : distanceKm;
  const rate = rates[vehicle][tripType];

  return {
    billableDistanceKm,
    rate,
    fare: tripType === 'Inside City'
      ? billableDistanceKm * rate
      : Math.ceil(billableDistanceKm * rate / 100) * 100,
  };
}
