import mongoose, { Schema, model } from "mongoose";
import { commentSchema, IComment } from './blogSchema';

export type Project = {
    title: string;
    date: string;
    description: string;
    imageSrc: string;
    alt: string;
    githubLink?: string;
    downloadLink?: string;
    playLink?: string;
    comments: IComment[];
}


const projectSchema = new Schema<Project>({
    title: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    imageSrc: { type: String, required: true },
    alt: { type: String, required: true },
    githubLink: { type: String, required: false },
    downloadLink: { type: String, required: false },
    playLink: { type: String, required: false },
    comments: { type: [commentSchema], default: [] },
})

const ProjectModel = mongoose.models['projects'] || mongoose.model("projects", projectSchema);

export default ProjectModel;