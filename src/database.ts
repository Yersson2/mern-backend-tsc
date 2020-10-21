import mongoose, { ConnectionOptions } from 'mongoose';
import config from './config';

(async () => {
  try {
    const mongooseOptions: ConnectionOptions = {
      useNewUrlParser : true,
      useUnifiedTopology : true,
      useFindAndModify : true,
      useCreateIndex: true
    };
  
    const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOptions);
    console.log('DB is connected to:', db.connection.name);

  } catch (error) {
    console.error(error);
  }
})()