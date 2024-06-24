'use client'

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    Card,
    CardContent,
    CardHeader
} from "@/components/ui/card";

const Card_Email = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!,
            {
            from_name: formState.name,
            to_name: 'Aaron',
            from_email: formState.email,
            to_email: process.env.NEXT_PUBLIC_EMAIL,
            message: formState.message,
            },
            process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
        )
        .then((result) => {
            console.log(result.text);
            setFormState({
                name: '',
                email: '',
                message: '',
            })
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className='flex justify-center mb-10'>
            <Card className='flex flex-col xl:w-[500px]'>
                <CardHeader>
                    <h2 className="text-lg font-bold">Contact Me</h2>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                required
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Card_Email;
