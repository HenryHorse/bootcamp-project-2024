'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('');

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();

        const { name, email, message } = formData;

        if (!name || !email || !message) {
            setStatus('All fields are required.');
            return;
        }

        try {
            const serviceID = 'service_9yybl8h';
            const templateID = 'template_xat1jks';
            const userID = 'USPmONCTyj9PKu6hM';

            const result = await emailjs.send(
                serviceID,
                templateID,
                { name, email, message },
                userID
            );

            if (result.status === 200) {
                setFormData({ name: '', email: '', message: '' });
                setStatus('Email sent successfully!');
            } else {
                setStatus('Failed to send email. Please try again.');
            }
        } catch (error) {
            setStatus('Something went wrong. Please try again later.');
            console.error(error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 mt-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border p-2 rounded w-full"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border p-2 rounded w-full"
                />
                <textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border p-2 rounded w-full"
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    Send
                </button>
                {status && <p>{status}</p>}
            </form>
        </div>
    );
}