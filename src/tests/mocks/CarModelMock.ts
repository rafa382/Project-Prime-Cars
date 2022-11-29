import { Model } from '../../interfaces/ModelInterface';
import { Car } from '../../interfaces/CarInterface';
import carMock from '../mocks/CarMock';

class CarModelMock implements Model<Car> {
  async create(object: Car): Promise<Car> {
    return object;
  }
  async read(): Promise<Car[]> {
    throw new Error('Method not implemented.');
  }
  async readOne(id: string): Promise<Car | null> {
    return carMock
  }
  async update(id: string, object: Car): Promise<Car | null> {
    return object;
  }
  delete(id: string): Promise<Car | null> {
    throw new Error('Method not implemented.');
  }

}

export default CarModelMock;