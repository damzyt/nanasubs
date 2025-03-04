import * as React from "react"

import styles from "./input.module.css";

interface InputProps extends React.ComponentProps<"input"> {
    error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ type, error = false, ...props }, ref) => {
        return (
            <input
                className={`${styles.input} ${error ? styles.invalid : ''}`}
                type={type}
                ref={ref}
                {...props}
            />
        )
    }

)

export { Input }