import { useCallback } from 'react';
import { authClient } from '@/lib/auth-client';

export const useDiscordAuth = () => {

    const handleOnClick = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();

        const data = await authClient.signIn.social({
            provider: "discord"
        })

    }, []);

    return handleOnClick;

}