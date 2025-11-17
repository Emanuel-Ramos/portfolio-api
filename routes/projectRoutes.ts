import { Router } from 'express';
import {
  createProject,
  deleteProject,
  getAllProjects,
  updateProject,
} from '../controllers/projectsController';

const projectRouter: Router = Router();

projectRouter.get('/', getAllProjects);
projectRouter.post('/', createProject);
projectRouter.delete('/', deleteProject);
projectRouter.put('/:name', updateProject);

export default projectRouter;
