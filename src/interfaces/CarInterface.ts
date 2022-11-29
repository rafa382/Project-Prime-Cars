import { z } from 'zod';
import { Vehicle } from './VehicleInterface';

const CarSchema = z.object({
  doorsQty: z.number().gte(2).or(z.number().lte(4)),
  seatsQty: z.number().gte(2).and(z.number().lte(7)),
});

type Car = Vehicle & z.infer<typeof CarSchema>;

export default CarSchema;
export { Car };