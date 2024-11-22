import React from 'react';
import type {Blog} from "@/database/blogSchema"
import Image from 'next/image'
import Link from "next/link";

export default function BlogPreview(props: Blog) {
    const {title, date, description, image, imageAlt, slug} = props;

    return (
        <div className="blog-entry bg-white shadow-md rounded-lg overflow-hidden p-6">
            <h2 className="text-2xl font-bold text-center">{title}</h2>
            <p className="text-center">{date.toDateString()}</p>
            <p>{description}</p>
            <div className="flex justify-center mt-4">
                <Image src={image} alt={imageAlt} width={500} height={300} className="rounded-lg"/>
            </div>
            <Link href={`/Blogs/${slug}`} className="text-blue-700 underline">To find out more...</Link>
        </div>
    );
}