import mongoose from 'mongoose';
import log from './log.js';

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    log.info(`Connected to MongoDb ${conn.connection.host}`);
  } catch (error) {
    log.error(error);
  }
};

export default connectDb;
