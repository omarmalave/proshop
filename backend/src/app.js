import express from 'express';
import 'express-async-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import usersRouter from './routes/users.js';
import productsRouter from './routes/productRouter.js';
import connectDb from './config/db.js';
import errorHandler, { notFoundHandler } from './middlewares/errorHandler.js';

dotenv.config();

connectDb();

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);
app.use('/api/products', productsRouter);

app.use(notFoundHandler);

app.use(errorHandler);

export default app;
