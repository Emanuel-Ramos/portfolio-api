import mongoose from 'mongoose';

export interface IDocument {
  text: string;
  title: string;
}

const documentSchema = new mongoose.Schema<IDocument>({
  text: { type: String, required: false },
  title: { type: String, required: false },
});

const DocumentModel = mongoose.model<IDocument>('Document', documentSchema);

export default DocumentModel;
