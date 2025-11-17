import express, { type Application } from 'express';
import documentRoutes from './routes/documentRoutes';
import projectRoutes from './routes/projectRoutes';

const app: Application = express();
app.use(express.json());

app.use('/api/documents', documentRoutes);
app.use('/api/projects', projectRoutes);

export default app;
