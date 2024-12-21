'use client';
import { useState } from 'react';

type AddCommentProps = {
    endpoint: string;
};

function AddComment({ endpoint }: AddCommentProps) {
    const [user, setUser] = useState('');
    const [comment, setComment] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_URL;
            if (!baseUrl) {
                throw new Error("Missing base url");
            }


            console.log(`${baseUrl}/api/${endpoint}/comment`);
            const res = await fetch(`${baseUrl}/api/${endpoint}/comment`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user: user, comment: comment }),
            });

            if (!res.ok) {
                throw new Error('Failed to add comment');
            }

            setSuccess('Comment added successfully. Please refresh.');
            setUser('');
            setComment('');
        } catch (error) {
            console.error(error);
            setError('Failed to add comment.');
        }
    }

    return (
        <div className="mt-8">
            <h3 className="text-lg font-bold">Add a Comment</h3>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <textarea
                    placeholder="Your Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <button type="submit" className="px-4 py-2 bg-teal-900 text-white rounded">
                    Submit
                </button>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
            </form>
        </div>
    );
}

export default AddComment;

