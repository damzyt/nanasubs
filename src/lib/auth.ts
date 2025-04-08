import { betterAuth } from 'better-auth';
import { prisma } from './prisma';
import { prismaAdapter } from 'better-auth/adapters/prisma';

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: 'postgresql',
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
        requireEmailVerification: true,
        autoSignInAfterVerification: true,
    },
    emailVerification: {
        sendOnSignUp: true,
        sendOnEmailChange: true,
    },
    socialProviders: {
        discord: {
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }
    },
    user: {
        modelName: 'cardinal_users',
        fields: {
            emailVerified: 'email_verified',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    },
    account: {
        modelName: 'cardinal_user_accounts',
        fields: {
            userId: 'user_id',
            accountId: 'account_id',
            providerId: 'provider_id',
            accessToken: 'access_token',
            refreshToken: 'refresh_token',
            accessTokenExpiresAt: 'access_token_expires_at',
            refreshTokenExpiresAt: 'refresh_token_expires_at',
            idToken: 'id_token',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
        accountLinking: {
            enabled: true,
        }
    },
    session: {
        modelName: 'cardinal_user_sessions',
        fields: {
            userId: 'user_id',
            createdAt: 'created_at',
            ipAddress: 'ip_address',
            userAgent: 'user_agent',
            updatedAt: 'updated_at',
            expiresAt: 'expires_at',
        },
        cookieCache: {
            enabled: true,
            maxAge: 60 * 60,
        }
    },
    verification: {
        modelName: 'cardinal_user_verifications',
        fields: {
            expiresAt: 'expires_at',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    },
});