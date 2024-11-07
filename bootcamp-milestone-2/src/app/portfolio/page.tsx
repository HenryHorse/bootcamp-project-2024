import ProjectCard from "@/app/components/ProjectCard";
import project_cards from "@/app/data/projectData";
import React from "react";

export default function Resume() {
    return (
        <section className="portfolio bg-gray-100 py-12">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8 text-teal-900">My Projects</h2>

                <div className="grid grid-cols-2 gap-8">
                    {project_cards.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}