import express, { type Application } from 'express';
import documentRoutes from './routes/documentRoutes';

const app: Application = express();
app.use(express.json());

app.use('/api/documents', documentRoutes);
app.use('/api/projects', documentRoutes);

export default app;
