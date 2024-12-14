import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import Blog from '@/database/blogSchema';

type IParams = {
    params: {
        slug: string
    }
}

export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB;

    const { slug } = await params;
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
        return NextResponse.json({ error: 'Failed to add coment' }, { status: 500 });
    }
}