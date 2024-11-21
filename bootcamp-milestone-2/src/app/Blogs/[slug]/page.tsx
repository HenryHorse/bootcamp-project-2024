import { notFound } from 'next/navigation';
import blogs from '@/app/data/blogData';
import Image from 'next/image';

type BlogPageProps = {
    params: {
        slug: string;
    };
};

export default async function BlogPage({ params }: BlogPageProps) {
    const { slug } = await params;
    const blog = blogs.find((post) => post.slug === slug);

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
        </div>
    );
}


