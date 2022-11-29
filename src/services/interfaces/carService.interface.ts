import { Car } from '../../interfaces/CarInterface';

interface ICarService {
  create(object: Car): Promise<Car>,
  read(): Promise<Car[]>,
  readOne(id : string): Promise<Car | null>,
  update(id: string, object: Car): Promise<Car | null>
}

export default ICarService;