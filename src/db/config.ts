import { Sequelize } from 'sequelize-typescript';
import 'dotenv/config';
const connection = new Sequelize({
  dialect: 'mssql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database:  process.env.DB_DATABASE,
  logging: false,
});

export default connection;