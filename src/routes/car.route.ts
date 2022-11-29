import { Router } from 'express';
import CarController from '../controllers/carController';
import CarModel from '../models/carModel';
import CarService from '../services/carService';

const router = Router();

const carModel = new CarModel();
const carService = new CarService(carModel);
const carController = new CarController(carService);

router.post('/cars', carController.create);

router.get('/cars', carController.read);

router.get('/cars/:id', carController.readOne);

router.put('/cars/:id', carController.update);

export default router;