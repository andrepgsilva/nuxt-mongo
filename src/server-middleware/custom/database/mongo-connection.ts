import mongoose from 'mongoose';

export default class MongoConnection {
   constructor() {
     const mongoConnectionString = process.env.MONGO_CONNECTION_STRING as string;
 
     // @ts-ignore
     const mongoConnection = mongoose.connect(mongoConnectionString, { useNewUrlParser: true } as mongoose.ConnectOptions);
  }
}