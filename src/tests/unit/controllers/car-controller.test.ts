import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import CarController  from '../../../controllers/carController';
import CarServiceMock from '../../mocks/CarServiceMock';
import { Request, Response } from 'express';
import carMock from '../../mocks/CarMock';

describe('Car Controller',() => {
  
  describe('creates a car and returns status 201', () => {
    const req = {} as Request;
    const res = {} as Response;
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      req.body = carMock;
    });

  it('method create returns status 201', async () => {
    const carController = new CarController(new CarServiceMock());

    await carController.create(req, res);

    expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
  });

  });
});