'use client'

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    Card,
    CardContent,
    CardHeader
} from "@/components/ui/card";
import { toast, useToast } from './ui/use-toast';

declare global {
    interface Window {
        grecaptcha: any;
    }
}

const Card_Email = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const loadReCaptcha = async () => {
        if (!window.grecaptcha) {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
                script.async = true;
                script.defer = true;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            // Load reCAPTCHA when form is submitted
            await loadReCaptcha();
    
            let token;
            try {
                // Wait for reCAPTCHA to be ready
                await new Promise((resolve, reject) => {
                    const checkRecaptcha = () => {
                        if (window.grecaptcha && window.grecaptcha.execute) {
                            resolve(true);
                        } else if (attempts > 50) { // 5 seconds timeout
                            reject(new Error('ReCAPTCHA failed to load'));
                        } else {
                            setTimeout(checkRecaptcha, 100);
                        }
                    };
                    let attempts = 0;
                    checkRecaptcha();
                });
    
                // Execute reCAPTCHA and ensure we get a valid token
                token = await window.grecaptcha.execute(
                    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
                    { action: 'submit_form' }
                );
    
                if (!token) {
                    throw new Error('Failed to get reCAPTCHA token');
                }
            } catch (recaptchaError) {
                console.error('ReCAPTCHA error:', recaptchaError);
                toast({
                    title: "Verification Failed",
                    description: "Please try again.",
                });
                setLoading(false);
                return; // Stop the submission if reCAPTCHA fails
            }
    
            // Only proceed with email if we have a valid token
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!,
                {
                    from_name: formState.name,
                    to_name: 'Aaron',
                    from_email: formState.email,
                    to_email: process.env.NEXT_PUBLIC_EMAIL,
                    message: formState.message,
                    'g-recaptcha-response': token,
                },
                process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
            );
    
            toast({
                description: "Your message has been sent.",
            });
    
            setFormState({
                name: '',
                email: '',
                message: '',
            });
    
        } catch (error) {
            console.error(error);
            toast({
                title: "Uh oh! Something went wrong.",
                description: "There was a problem sending your message.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex justify-center'>
            <Card className='flex flex-col w-[300px] xl:w-[400px]'>
                <CardHeader />
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
                                className="card-email_input"
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
                                className="card-email_input"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={formState.message}
                                onChange={handleChange}
                                className="card-email_input"
                                required
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={loading} // Disable the button while loading
                                className={`px-4 py-2 font-semibold text-white bg-blue-500 rounded-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default Card_Email;