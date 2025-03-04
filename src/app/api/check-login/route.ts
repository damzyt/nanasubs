import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const { login } = await request.json();

        if (!login || typeof login !== 'string') {
            return NextResponse.json(
                { error: 'Valid login required' },
                { status: 400 }
            );
        }

        const existingUser = await prisma.cardinal_users.findFirst({
            where: {
                name: {
                    equals: login,
                    mode: 'insensitive'
                }
            },
        });

        const suggestions = [];
        if (existingUser) {
            const baseLogin = login.replace(/\d+$/, '');
            for (let i = 1; i <= 3; i++) {
                suggestions.push(`${baseLogin}${Math.floor(Math.random() * 1000)}`);
            }
        }

        return NextResponse.json({
            available: !existingUser,
            suggestions
        });

    } catch (error) {
        console.error('Login check error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}