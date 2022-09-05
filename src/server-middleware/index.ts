import MongoConnection from './custom/database/mongo-connection';
import ProductMongoRepository from './custom/database/repository/product-mongo-repository';
import Product from './custom/database/models/product-model';

new MongoConnection();

import express from 'express';
const app = express();

app.use('/products', async (req: any, res: any) => {
  const ProductRepository = new ProductMongoRepository(Product);
  
  res.json(await ProductRepository.getAll())
});

export default app;