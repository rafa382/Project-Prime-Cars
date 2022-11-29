import GenericModel from './genericModel';
import { Car } from '../interfaces/CarInterface';
import ICarModel from '../interfaces/CarModel.interface';
import carModel from './schemas/carSchema';

class CarModel extends GenericModel<Car> implements ICarModel {
  constructor(modelMongoose = carModel) {
    super(modelMongoose);
  }
}

export default CarModel;