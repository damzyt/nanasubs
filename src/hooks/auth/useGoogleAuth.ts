import { useCallback } from 'react';
import { authClient } from '@/lib/auth-client';

export const useGoogleAuth = () => {

    const handleOnClick = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();

        const data = await authClient.signIn.social({
            provider: "google"
        })

    }, []);

    return handleOnClick;

}