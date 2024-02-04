import express, { Request, Response } from 'express';
import { Contacts } from '../models/contacts';
import MessageResponse from '../interfaces/MessageResponse';

const router = express.Router();

// Get all contacts
router.get<{}, MessageResponse>('/', async (req: Request, res: Response<MessageResponse>) => {
  try {
    const contacts = await Contacts.findAll();
    const messageResponse: MessageResponse = {
      message: 'Contacts fetched successfully',
      contacts: contacts,
    };
    res.json(messageResponse);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// // Get a single contact by ID
// router.get('/:id', async (req: Request, res: Response) => {
//   try {
//     const contact = await Contacts.findByPk(req.params.id);
//     if (!contact) {
//       return res.status(404).json({ message: 'Contact not found' });
//     }
//     const messageResponse: MessageResponse = {
//       message: 'Contact fetched successfully',
//       contact: contact,
//     };
//     res.json(messageResponse);
//   } catch (error) {
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// Create a new contact
router.post('/', async (req: Request, res: Response) => {
  try {
    const newContact = await Contacts.create(req.body);
    const messageResponse: MessageResponse = {
      message: 'Contact created successfully',
      contact: newContact,
    };
    res.status(201).json(messageResponse);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update a contact by ID
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Contacts.update({ ...req.body }, { where: { id } });
    const updatedContact = await Contacts.findByPk(id);
    if (!updatedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    const messageResponse: MessageResponse = {
      message: 'Contact updated successfully',
      contact: updatedContact,
    };
    res.json(messageResponse);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete a contact by ID
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedContact = await Contacts.findByPk(id);
    if (!deletedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    await Contacts.destroy({ where: { id } });
    const messageResponse: MessageResponse = {
      message: 'Contact deleted successfully',
      contact: deletedContact,
    };
    res.json(messageResponse);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});


export default router;
