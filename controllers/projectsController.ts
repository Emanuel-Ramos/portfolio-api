import { Request, Response } from 'express';
import mongoose from 'mongoose';
import ProjectModel from '../models/Project';

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await ProjectModel.find();
    res.status(200);
    res.send(projects);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const project = new ProjectModel(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).send(error);
  }
};
