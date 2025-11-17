import { Router, type Request, type Response } from 'express';
import * as documentController from '../controllers/documentController';

const documentRouter: Router = Router();

documentRouter.get('/', documentController.getAllDocuments);
documentRouter.post('/', documentController.createDocument);

export default documentRouter;
