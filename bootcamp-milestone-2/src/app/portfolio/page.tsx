import ProjectCard from "@/app/components/ProjectCard";
import ProjectModel, { Project } from "@/database/projectSchema"
import React from "react";
import connectDB from "@/database/db";

export default async function Resume() {
    const projects = await getProjects();

    if (!projects) {
        return <p>No projects found!</p>;
    }

    return (
        <section className="portfolio bg-gray-100 py-12">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8 text-teal-900">My Projects</h2>

                <div className="grid grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

async function getProjects() {
    await connectDB()

    try {
        const projects = await ProjectModel.find().lean<Project[]>();
        return projects
    } catch (err) {
        return null
    }
}