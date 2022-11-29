import joi from 'joi';
import { Car } from '../interfaces/CarInterface';
import ICarService from './interfaces/carService.interface';
import ICarModel from '../interfaces/CarModel.interface';
import Err from '../util/error';

const schema = joi.object({
  model: joi.string().required().not().empty(),
  year: joi.number().required().not().empty(), 
  color: joi.string().required().not().empty(),
  buyValue: joi.number().required().not().empty(), 
  seatsQty: joi.number().min(2).required().not()
    .empty(), 
  doorsQty: joi.number().min(2).required().not()
    .empty(), 
}).not().empty();

class CarService implements ICarService {
  private _carModel: ICarModel;

  constructor(carModel: ICarModel) {
    this._carModel = carModel;
  }

  async create(object: Car): Promise<Car> {
    const { error } = schema.validate(object);
    if (error) {
      throw new Err(400);
    }
    const createdCar = await this._carModel.create(object);
    return createdCar;
  }

  async read(): Promise<Car[]> {
    const cars = await this._carModel.read();
    return cars;
  }

  async readOne(id : string): Promise<Car | null> {
    if (id.length < 24) {
      throw new Err(400, 'Id must have 24 hexadecimal characters');
    }
    const car = await this._carModel.readOne(id);
    if (!car) {
      throw new Err(404, 'Object not found');
    }
    return car;
  }

  async update(id: string, object: Car): Promise<Car | null> {
    const { error } = schema.validate(object);
    if (error) {
      throw new Err(400);
    }
    if (id.length < 24) {
      throw new Err(400, 'Id must have 24 hexadecimal characters');
    }
    const car = await this._carModel.update(id, object);
    if (!car) {
      throw new Err(404, 'Object not found');
    }
    return car;
  }
}

export default CarService;