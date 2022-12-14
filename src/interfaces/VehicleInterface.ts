import { z } from 'zod';

const VehicleSchema = z.object({
  model: z.string().min(3),
  year: z.number().gte(1900).lte(2022),
  color: z.string().min(3),
  status: z.optional(z.string()),
  buyValue: z.number().int(),
});

type Vehicle = z.infer<typeof VehicleSchema>;

export default VehicleSchema;
export { Vehicle };