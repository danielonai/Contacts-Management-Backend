import { Model, DataType } from 'sequelize-typescript';
import connection from '../db/config';

interface IContacts extends Model {
  id: number
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  street: string;
  zipCode: string;
  phone: string;
  email: string;
}

export const Contacts = connection.define<IContacts>('contacts', {
  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: DataType.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataType.STRING,
    allowNull: false,
  },
  country: {
    type: DataType.STRING,
    allowNull: false,
  },
  city: {
    type: DataType.STRING,
    allowNull: false,
  },
  street: {
    type: DataType.STRING,
    allowNull: false,
  },
  zipCode: {
    type: DataType.STRING,
    allowNull: false,
  },
  phone: {
    type: DataType.STRING,
    allowNull: false,
  },
  email: {
    type: DataType.STRING,
    allowNull: false,
  },
});


Contacts.sync().then(() => console.log('Contacts table created'));