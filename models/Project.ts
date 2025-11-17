import mongoose from 'mongoose';

export interface IProject {
  name: string;
  icon: string;
}

const ProjectSchema = new mongoose.Schema<IProject>({
  name: { type: String, required: true },
  icon: { type: String, required: true },
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

export default ProjectModel;
