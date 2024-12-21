
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Comment from '@/app/components/Comment'
import {IComment} from "@/database/blogSchema";
import AddComment from '@/app/components/addComment';


type BlogPageProps = {
    params: Promise<{ slug: string }>;
};


export default async function BlogPage({ params }: BlogPageProps) {
    const { slug } = await params;
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
                <AddComment endpoint={`Blogs/${slug}`}/>
            </div>
            <div className="mt-10">
                <h2 className="text-2xl font-bold text-teal-900">Comments</h2>
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
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || `https://${process.env.VERCEL_URL}`;
        if (!baseUrl) {
            throw new Error("Missing base url");
        }
        const res = await fetch(`${baseUrl}/api/Blogs/${slug}`, {
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


