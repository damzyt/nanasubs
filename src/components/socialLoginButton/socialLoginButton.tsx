import React from "react";

import { Button } from "@/components/button/button";
import { FaDiscord, FaGoogle } from "react-icons/fa6";

import style from "@/components/socialLoginButton/socialLoginButton.module.css";

interface SocialLoginButtonProps {
    provider: 'discord' | 'google';
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
    provider,
    onClick,
    disabled
}) => {

    const providerIcons = {
        discord: <FaDiscord />,
        google: <FaGoogle />
    };

    return (
        <Button
            className={`${style.provider} ${style[provider]}`}
            onClick={onClick}
            disabled={disabled}
        >
            {providerIcons[provider]} <span>{provider}</span>
        </Button>
    );

}

export { SocialLoginButton };