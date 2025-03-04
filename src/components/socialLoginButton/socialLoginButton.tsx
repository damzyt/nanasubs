import React from "react";

import { Button } from "@/components/button/button";
import { FaDiscord, FaGoogle } from "react-icons/fa6";

import style from "@/components/socialLoginButton/socialLoginButton.module.css";

interface SocialLoginButtonProps {
    provider: 'discord' | 'google';
    onClick?: () => void;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ provider, onClick }) => {

    const providerIcons = {
        discord: <FaDiscord />,
        google: <FaGoogle />
    };

    return (
        <Button
            className={`${style.provider} ${style[provider]}`}
            onClick={onClick}
        >
            {providerIcons[provider]}
        </Button>
    );

}

export { SocialLoginButton };