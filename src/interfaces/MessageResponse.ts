import { Contacts } from '../models/contacts';

export default interface MessageResponse {
  message?: string;
  contacts?: Contacts[]
  contact?: Contacts
}
