import React from 'react';
import blogs from '@/app/data/blogData';
import BlogPreview from '../components/blogPreview'

export default function BlogsPage() {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 p-6">
            {blogs.map((blog) => (
                <BlogPreview key={blog.slug} {...blog} />
            ))}
        </div>
    );
}