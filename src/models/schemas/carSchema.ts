import { Schema, model } from 'mongoose';
import { Car } from '../../interfaces/CarInterface';

const carSchema = new Schema<Car>({
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  buyValue: { type: Number, required: true },
  doorsQty: { type: Number, required: true },
  seatsQty: { type: Number, required: true },
}, { versionKey: false });

const carModel = model<Car>('cars', carSchema);

export default carModel; 