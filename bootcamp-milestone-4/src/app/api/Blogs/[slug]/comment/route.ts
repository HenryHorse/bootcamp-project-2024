import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import Blog from '@/database/blogSchema';



export async function POST(req: NextRequest) {
    await connectDB

    const encodedSlug = req.nextUrl.pathname.split("/")[3];
    const slug = encodedSlug ? decodeURIComponent(encodedSlug) : null;
    const body = await req.json();

    if (!body || !body.user || !body.comment) {
        return NextResponse.json({ error: 'Invalid request body'}, { status: 400 });
    }
    try {
        const updatedBlog = await Blog.findOneAndUpdate(
            { slug },
            { $push: { comments: { user: body.user, comment: body.comment, time: new Date() } } },
            { new: true }
        );

        if (!updatedBlog) {
            return NextResponse.json({ error: 'Blog not found'}, { status: 404 });
        }

        return NextResponse.json(updatedBlog, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Failed to add comment' }, { status: 500 });
    }
}