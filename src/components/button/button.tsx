import * as React from "react"

import style from "@/components/button/button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, ...props }, ref) => {

        const buttonClass = className ? `${style.button} ${className}` : style.button;

        return (
            <button
                className={buttonClass}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        )
    }
)

export { Button }