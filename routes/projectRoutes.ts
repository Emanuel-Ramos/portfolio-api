import { Router } from 'express';
import {
  createProject,
  getAllProjects,
} from '../controllers/projectsController';

const projectRouter: Router = Router();

projectRouter.get('/', getAllProjects);
projectRouter.post('/', createProject);

export default projectRouter;
