import ProductRepository from "./product-repository";

export default class ProductMongoRepository implements ProductRepository {
  constructor(readonly productModel: any) {}
  
  async getAll(): Promise<void> {
    const response = await this.productModel.find({}).lean().exec();

    return response;
  }
}