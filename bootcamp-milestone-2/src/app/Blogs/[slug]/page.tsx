import { notFound } from 'next/navigation';
import Image from 'next/image';
import Comment from '@/app/components/Comment'
import {IComment} from "@/database/blogSchema";

type BlogPageProps = {
    params: { slug: string; };
};


export default async function BlogPage({ params }: BlogPageProps) {
    const { slug } = params;
    const blog = await getBlog(slug);
    if (!blog) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto p-6 mt-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-center text-2xl font-mono mt-4">{blog.title}</h1>
            <h1 className="text-center text-2xl font-mono mt-4">{blog.date}</h1>
            <div className="font-mono mt-6 space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>{blog.description}</p>
            </div>
            <div className="flex justify-center mt-6">
                <Image src={blog.image} alt={blog.imageAlt} width={600} height={300} className="rounded-lg object-cover"/>
            </div>
            <div>
                <h2>Comments</h2>
                {blog.comments && blog.comments.length > 0 ? (
                    blog.comments.map((comment: IComment, index: number) => (
                        <Comment key={index} comment={comment}></Comment>
                    ))
                ) : (
                    <p>No comments yet</p>
                )}
            </div>
        </div>

    );
}


async function getBlog(slug: string) {
    try {
        const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
            cache: "no-store",
        })

        if (!res.ok) {
            throw new Error("Failed to fetch blog");
        }

        return res.json();
    } catch (err: unknown) {
        console.log(`error: ${err}`);
        return null;
    }
}


