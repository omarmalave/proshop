import express from 'express';
import 'express-async-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import usersRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import orderRouter from './routes/orderRouter.js';
import connectDb from './config/db.js';
import errorHandler, { notFoundHandler } from './middlewares/errorHandler.js';

dotenv.config();

connectDb();

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.use(notFoundHandler);

app.use(errorHandler);

export default app;
