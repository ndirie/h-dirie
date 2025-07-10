'use client';

import { useCallback, useState } from "react";

type SendMessageProps = {
    name: string;
    email: string;
    subject: string;
    body: string;
}

// This should match your backend Email domain class
type EmailResponse = {
    id: string; // or number depending on your backend
    name: string;
    sender: string;
    recipient: string;
    subject: string;
    body: string;
    status: 'PENDING' | 'SENT' | 'FAILED'; // or whatever status field you have
    createdAt: string; // or Date if you want to parse it
    // include any other fields from your Email domain class
}

export const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const [emailResponse, setEmailResponse] = useState<EmailResponse | null>(null);

    const sendMessage = useCallback(async ({
        name,
        email,
        subject,
        body,
    }: SendMessageProps) => {
        if (loading) {
            return;
        }
        try {
            setLoading(true);

            const response = await fetch('http://localhost:8081/api/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    sender: email, // your service email
                    recipient: 'nourdroidsoft@gmail.com', // user's email
                    subject,
                    body,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: EmailResponse = await response.json();
            setEmailResponse(data);

        } catch (error: unknown) {
            const err = error as Error;
            console.error('Error sending message:', err.message);
            setEmailResponse(null);
        } finally {
            setLoading(false);
        }
    }, [loading])

    return { sendMessage, loading, emailResponse };
}