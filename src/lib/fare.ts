export type VehicleType = 'Sedan' | 'SUV / Innova' | 'Tempo Traveller';
export type TripType = 'One Way' | 'Round Trip';

const rates: Record<Exclude<VehicleType, 'Tempo Traveller'>, Record<TripType, number>> = {
  Sedan: { 'One Way': 15, 'Round Trip': 14 },
  'SUV / Innova': { 'One Way': 22, 'Round Trip': 20 },
};

export function estimateFare(distanceKm: number, vehicle: VehicleType, tripType: TripType) {
  if (vehicle === 'Tempo Traveller') return null;

  const billableDistanceKm = tripType === 'Round Trip' ? distanceKm * 2 : distanceKm;
  const rate = rates[vehicle][tripType];

  return {
    billableDistanceKm,
    rate,
    fare: Math.ceil(billableDistanceKm * rate / 100) * 100,
  };
}
