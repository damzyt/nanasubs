import { Input } from "@/components/input/input";
import { PasswordToggleButton } from "@/components/passwordToggleButton/passwordToggleButton";
import { usePasswordToggle } from "@/hooks/usePasswordToggle";

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