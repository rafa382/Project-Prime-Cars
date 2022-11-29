import { expect } from 'chai';
import CarService from '../../../services/carService';
import carMock from '../../mocks/CarMock';
import CarModelMock from '../../mocks/CarModelMock';


describe('Car Service',() => {
  
  describe('Create car', () => {

  it('Create a car in database with success', async () => {
    const carService = new CarService(new CarModelMock());

    const carCreated = await carService.create(carMock);
    expect(carCreated).to.be.equal(carMock);
  });

  });

  describe('Update a car', () => {

    it('Update a car in database with success', async () => {
      const carService = new CarService(new CarModelMock());

      const id = '62cdfc2d685701ca1af21b70';
  
      const carCreated = await carService.update(id, carMock);
  
      expect(carCreated).to.be.equal(carMock);
    });
  
    });

    describe('get a car by id', () => {

      it('get a car by id in database with success', async () => {
        const carService = new CarService(new CarModelMock());
  
        const id = '62cdfc2d685701ca1af21b70';
    
        const carCreated = await carService.readOne(id);

        expect(carCreated).to.be.deep.equal(carMock);
      });
    
      });
});