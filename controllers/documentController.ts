import { Request, Response } from 'express';
import DocumentModel from '../models/Document';

export const getAllDocuments = async (req: Request, res: Response) => {
  try {
    const documents = await DocumentModel.find();
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
};

export const createDocument = async (req: Request, res: Response) => {
  try {
    const { title, text } = req.body;
    const document = new DocumentModel({ title, text });
    await document.save();
    res.status(201).json(document);
  } catch (error) {
    res.status(500).json({ error: 'Error creating document' });
  }
};

