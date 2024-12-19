import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import Project from '@/database/projectSchema';

type IParams = {
    params: {
        title: string
    }
}

export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB;


    const { title } = await params;
    const body = await req.json();
    console.log(body);

    if (!body || !body.user || !body.comment) {
        return NextResponse.json({ error: 'Invalid request body'}, { status: 400 });
    }
    try {
        const updatedProject = await Project.findOneAndUpdate(
            { title },
            { $push: { comments: { user: body.user, comment: body.comment, time: new Date() } } },
            { new: true }
        );

        if (!updatedProject) {
            return NextResponse.json({ error: 'Project not found'}, { status: 404 });
        }

        return NextResponse.json(updatedProject, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Failed to add coment' }, { status: 500 });
    }
}