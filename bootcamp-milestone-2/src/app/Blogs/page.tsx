import React from 'react';
import Blog from '@/database/blogSchema'
import connectDB from '@/database/db';
import BlogPreview from '../components/blogPreview'

export default async function BlogsPage() {
    const blogs = await getBlogs();

    if (!blogs) {
        return <p>No blogs found!</p>;
    }

    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 p-6">
            {blogs.map((blog) => (
                <BlogPreview key={blog.slug} {...blog} />
            ))}
        </div>
    );
}


async function getBlogs(){
    await connectDB()

    try {
        const blogs = await Blog.find().sort({ date: -1 }).orFail().lean()
        return blogs
    } catch (err) {
        return null
    }
}