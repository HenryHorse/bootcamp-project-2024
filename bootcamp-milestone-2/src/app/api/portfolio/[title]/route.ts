
import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import projectSchema from "@/database/projectSchema";

type IParams = {
    params: {
        title: string
    }
}

export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB();
    const { title } = await params;

    try {
        const project = await projectSchema.findOne({ title }).orFail()


        return NextResponse.json(project);
    } catch (err) {
        return NextResponse.json('Project not found.', { status: 404 })
    }
}


