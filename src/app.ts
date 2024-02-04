import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import * as middlewares from './middlewares';
import connection from './db/config';
import contacts from './api/contacts';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/v1/contacts', contacts);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

connection
  .sync()
  .then(() => {
    console.log('Database successfully connected');
  })
  .catch((err) => {
    console.log('Error', err);
  });

export default app;
