import { Request, Response } from 'express';
import ICarService from '../services/interfaces/carService.interface';
import ICarController from './interfaces/carController.interface';
import Err from '../util/error';

class CarController implements ICarController {
  private _carService: ICarService;

  constructor(carService: ICarService) {
    this._carService = carService;
  }

  create = async (req: Request, res: Response):
  Promise<Response | void> => {
    try {
      const { model, year, color, buyValue, doorsQty, seatsQty } = req.body;
      const carCreated = await this._carService.create({
        model,
        year,
        color,
        buyValue,
        seatsQty,
        doorsQty,
      });
      console.log(carCreated);
      return res.status(201).json(carCreated);
    } catch (error) {
      if (error instanceof Err) {
        return res.status(400).end();
      }
    }
  };

  read = async (req: Request, res: Response):
  Promise<Response | void> => {
    try {
      const cars = await this._carService.read();
      return res.status(200).json(cars);
    } catch (error) {
      return res.status(400).end();
    }
  };

  readOne = async (req: Request, res: Response):
  Promise<Response | void> => {
    try {
      const { id } = req.params;
      const car = await this._carService.readOne(id);
      return res.status(200).json(car);
    } catch (error) {
      if (error instanceof Err) {
        return res.status(error.status).json({ error: error.message });
      }
    }
  };

  update = async (req: Request, res: Response):
  Promise<Response | void> => {
    try {
      const { model, year, color, buyValue, doorsQty, seatsQty } = req.body;
      const { id } = req.params;
      const car = await this._carService
        .update(id, { model, year, color, buyValue, doorsQty, seatsQty });
      return res.status(200).json(car);  
    } catch (error) {
      if (error instanceof Err) {
        return res.status(error.status).json({ error: error.message });
      }
    }
  };
}

export default CarController;