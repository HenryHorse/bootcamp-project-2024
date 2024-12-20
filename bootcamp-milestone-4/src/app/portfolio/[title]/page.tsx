import { notFound } from 'next/navigation';
import Image from 'next/image';
import Comment from '@/app/components/Comment'
import {IComment} from "@/database/blogSchema";
import React from "react";

type ProjectPageProps = {
    params: Promise<{ title: string; }>;
};


export default async function ProjectPage({ params }: ProjectPageProps) {
    const {title} = await params;
    const project = await getProject(title);
    if (!project) {
        notFound();
    }


    return (
        <div className="max-w-2xl mx-auto p-6 mt-8 bg-white shadow-lg rounded-lg">
            <Image src={project.imageSrc} alt={project.alt} width={400} height={300} className="w-full h-auto object-cover" />
            <div className="p-6">
                {project.githubLink && (
                    <a href={project.githubLink} target="_blank"
                       className="text-teal-900 hover:text-green-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6"
                             viewBox="0 0 24 24">
                            <path
                                d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.579 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.305 3.492.998.108-.775.418-1.305.761-1.605-2.665-.304-5.467-1.334-5.467-5.932 0-1.311.469-2.381 1.237-3.221-.125-.304-.537-1.526.118-3.176 0 0 1.008-.323 3.3 1.23.958-.267 1.984-.4 3.006-.405 1.021.005 2.048.138 3.006.405 2.292-1.553 3.3-1.23 3.3-1.23.656 1.65.244 2.872.118 3.176.769.84 1.237 1.91 1.237 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.814 1.102.814 2.222 0 1.606-.014 2.901-.014 3.293 0 .321.217.694.825.577 4.764-1.591 8.197-6.086 8.197-11.384 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                )}
                <h3 className="text-2xl font-semibold text-teal-900">{decodeURIComponent(title)}</h3>
                <h4 className="text-xl font-semibold text-teal-900">{project.date}</h4>
                <p className="mt-4 text-gray-600">{project.description}</p>
                {project.downloadLink && (
                    <div className="flex justify-center">
                        <a className="text-teal-900 hover:text-green-300 text-2xl font-semibold mt-4 shadow-md"
                           href={project.downloadLink} download>Download Paper
                        </a>
                    </div>
                )}
                {project.playLink && (
                    <div className="flex justify-center mt-4">
                        <a href={project.playLink}
                           className="text-teal-900 hover:text-green-300 text-2xl font-semibold">
                            Play Game
                        </a>
                    </div>
                )}
            </div>
            <div>
                <h2>Comments</h2>
                {project.comments && project.comments.length > 0 ? (
                    project.comments.map((comment: IComment, index: number) => (
                        <Comment key={index} comment={comment}></Comment>
                    ))
                ) : (
                    <p>No comments yet</p>
                )}
            </div>
        </div>


    );
}


async function getProject(title: string) {
    try {
        const res = await fetch(`https://bootcamp-project-2024-h58567t8j-henryhorses-projects.vercel.app/portfolio/${title}`, {
            cache: "no-store",
        })

        if (!res.ok) {
            throw new Error("Failed to fetch project");
        }

        return res.json();
    } catch (err: unknown) {
        console.log(`error: ${err}`);
        return null;
    }
}


