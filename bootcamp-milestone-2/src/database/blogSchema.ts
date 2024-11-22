import mongoose, { Schema, model } from "mongoose";

// typescript type (can also be an interface)
export type Blog = {
    title: string;
    date: Date;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};


export const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
    slug: { type: String, required: true }
})


const BlogModel = mongoose.models['blogs'] ||
    mongoose.model('blogs', blogSchema);

export default BlogModel;