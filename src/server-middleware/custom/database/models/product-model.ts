import mongo from 'mongoose';
const Schema = mongo.Schema;

const productSchema = new Schema(
  {
    name: String,
    category: String,
    image: String
  }, 
  { collection: 'products' }
);

let model: mongo.Model<any>;

try {
  model = mongo.model('products', productSchema);
} catch(err) {
  model = mongo.models["products"];
}

export default model;