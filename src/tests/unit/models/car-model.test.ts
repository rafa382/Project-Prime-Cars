import { expect } from 'chai';
import carMock from '../../mocks/CarMock';
import sinon, { SinonStub } from 'sinon';
import CarModel from '../../../models/carModel';
import { Model } from 'mongoose';

describe('Car Model',() => {
  
  describe('Create a car', () => {
    before(() => {
      sinon.stub(Model, 'create').resolves(carMock);
    });
    after(() => {
      (Model.create as SinonStub).restore();
    });

  it('Create a car in database with success', async () => {
    const carModel = new CarModel();

    const carCreated = await carModel.create(carMock);

    expect(carCreated).to.be.deep.equal(carMock);
  });

  });

  describe('Update a car', () => {
    before(() => {
      sinon.stub(Model, 'findOneAndUpdate').resolves(carMock);
    });
    after(() => {
      (Model.findOneAndUpdate as SinonStub).restore();
    });
    it('Update a car in database with success', async () => {
      const carModel = new CarModel();

        const id = '62cdfc2d685701ca1af21b70';

        const carCreated = await carModel.update(id, carMock);

        expect(carCreated).to.be.deep.equal(carMock);
    });
  
    });

    describe('get a car by id', () => {
      before(() => {
        sinon.stub(Model, 'findById').resolves(carMock);
      });
      after(() => {
        (Model.findById as SinonStub).restore();
      });
      it('get a car by id in database with success', async () => {
        const carModel = new CarModel();

        const id = '62cdfc2d685701ca1af21b70';

        const carCreated = await carModel.readOne(id);

        expect(carCreated).to.be.deep.equal(carMock);
      });
    
      });
});