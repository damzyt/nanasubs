import { usePasswordToggle } from "@/hooks/auth";

import { Input } from "@/components/common";
import { PasswordToggleButton } from "@/components/auth";

interface PasswordInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    error?: boolean;
}

const PasswordInput = (props: PasswordInputProps) => {
    const { showPassword, togglePassword } = usePasswordToggle();

    return (
        <div className="relative flex items-center">
            <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                {...props}
            />
            <PasswordToggleButton
                showPassword={showPassword}
                togglePassword={togglePassword}
            />
        </div>
    );
};

export { PasswordInput };