import { Schema } from 'mongoose';
import { Vehicle } from '../../interfaces/VehicleInterface';

const vehicleSchema = new Schema<Vehicle>({
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  status: { type: String, required: true },
  buyValue: { type: Number, required: true },
});

export default vehicleSchema;