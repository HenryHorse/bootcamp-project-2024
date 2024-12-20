
import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import projectSchema from "@/database/projectSchema";



export async function GET(req: NextRequest) {
    await connectDB();
    const encodedTitle = req.nextUrl.pathname.split("/").pop();
    const title = encodedTitle ? decodeURIComponent(encodedTitle) : null;


    try {
        const project = await projectSchema.findOne({ title }).orFail()


        return NextResponse.json(project);
    } catch (err) {
        console.error(err);
        return NextResponse.json('Project not found.', { status: 404 })
    }
}


