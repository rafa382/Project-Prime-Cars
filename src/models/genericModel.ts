import mongoose, { isValidObjectId } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

abstract class GenericModel<T> implements Model<T> {
  protected _mongoose: mongoose.Model<T>;

  constructor(modelMongoose: mongoose.Model<T>) {
    this._mongoose = modelMongoose;
  }

  async create(object: T): Promise<T> {
    const obj = await this._mongoose.create(object);
    return obj;
  }

  async read(): Promise<T[]> {
    const findAll = await this._mongoose.find();
    return findAll;
  }

  async readOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    const findOne = await this._mongoose.findById(id);
    return findOne;
  }

  async update(id: string, object: T): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    const updatedCar = await this._mongoose
      .findOneAndUpdate({ _id: id }, object, { returnOriginal: false });
    return updatedCar;
  }
  
  async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    const car = await this._mongoose.findOneAndDelete({ _id: id });
    return car;
  }
}

export default GenericModel;