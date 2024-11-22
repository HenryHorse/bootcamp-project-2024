import React from 'react';
import BlogModel, { Blog } from '@/database/blogSchema';
import connectDB from '@/database/db';
import BlogPreview from '../components/blogPreview'

export default async function BlogsPage() {
    const blogs = await getBlogs();

    if (!blogs) {
        return <p>No blogs found!</p>;
    }

    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 p-6">
            {blogs.map((blog: Blog) => (
                <BlogPreview key={blog.slug} {...blog} />
            ))}
        </div>
    );
}


async function getBlogs() {
    await connectDB()

    try {
        const blogs = await BlogModel.find().sort({ date: -1 }).lean<Blog[]>();
        return blogs
    } catch (err) {
        return null
    }
}