
import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import blogSchema from "@/database/blogSchema"


export async function GET(req: NextRequest) {
    await connectDB()
    const encodedSlug = req.nextUrl.pathname.split("/").pop();
    const slug = encodedSlug ? decodeURIComponent(encodedSlug) : null;

    try {
        const blog = await blogSchema.findOne({ slug }).orFail()

        const formattedBlog = {
            ...blog.toObject(),
            date: blog.date.toDateString(),
        };

        return NextResponse.json(formattedBlog);
    } catch (err) {
        console.error(err);
        return NextResponse.json('Blog not found.', { status: 404 })
    }
}


