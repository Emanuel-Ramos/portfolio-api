import { Router, type Request, type Response } from 'express';
import * as documentController from '../controllers/documentController';

const router: Router = Router();

router.get('/', documentController.getAllDocuments);
router.post('/', documentController.createDocument);

export default router;
