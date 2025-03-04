import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || typeof email !== 'string') {
            return NextResponse.json(
                { error: 'Valid email required' },
                { status: 400 }
            );
        }

        const existingUser = await prisma.cardinal_users.findUnique({
            where: { email: email.toLowerCase() },
        });

        return NextResponse.json({
            available: !existingUser,
            suggestion: existingUser ?
                `Try ${email.split('@')[0]}${Math.floor(Math.random() * 1000)}@${email.split('@')[1]}` :
                null
        });

    } catch (error) {
        console.error('Email check error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}