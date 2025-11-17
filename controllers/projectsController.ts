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

export const updateProject = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;

    const response = await ProjectModel.updateOne({ name: name }, req.body);
    return res.json({ message: 'Projeto atualizado com sucesso', response });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;
    const result = await ProjectModel.deleteOne({ name: name });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Projeto não encontrado' });
    }

    return res.json({ message: 'Projeto deletado com sucesso' });
  } catch (error) {
    res.status(500).send(error);
  }
};
