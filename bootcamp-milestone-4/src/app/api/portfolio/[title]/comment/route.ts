import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import Project from '@/database/projectSchema';


function withCORS(response: NextResponse) {
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    return response;
}

export async function POST(req: NextRequest) {
    await connectDB;


    const encodedTitle = req.nextUrl.pathname.split("/")[3];
    const title = encodedTitle ? decodeURIComponent(encodedTitle) : null;
    const body = await req.json();

    if (!body || !body.user || !body.comment) {
        return withCORS(NextResponse.json({ error: 'Invalid request body'}, { status: 400 }));
    }
    try {
        const updatedProject = await Project.findOneAndUpdate(
            { title },
            { $push: { comments: { user: body.user, comment: body.comment, time: new Date() } } },
            { new: true }
        );

        if (!updatedProject) {
            return withCORS(NextResponse.json({ error: 'Project not found'}, { status: 404 }));
        }

        return withCORS(NextResponse.json(updatedProject, { status: 200 }));
    } catch (err) {
        console.error(err);
        return withCORS(NextResponse.json({ error: 'Failed to add coment' }, { status: 500 }));
    }
}