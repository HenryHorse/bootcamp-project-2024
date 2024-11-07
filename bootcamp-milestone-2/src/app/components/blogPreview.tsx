import React from 'react';
import type { Blog } from "@/app/data/blogData"
import Image from 'next/image'

export default function BlogPreview(props: Blog) {
    const {title, date, description, image, imageAlt, slug} = props;
    return (
        <div className="blog-entry bg-white shadow-md rounded-lg overflow-hidden p-6">
            <h2 className="text-2xl font-bold text-center">{title}</h2>
            <p className="text-center">{date}</p>
            <p>{description}</p>
            <div className="flex justify-center mt-4">
                <Image src={image} alt={imageAlt} width={500} height={300} className="rounded-lg"/>
            </div>
            <a href={`/blog/${slug}`} className="text-blue-700 underline">To find out more...</a>
        </div>
    );
}