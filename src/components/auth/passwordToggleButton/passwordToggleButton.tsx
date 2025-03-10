import style from './passwordToggleButton.module.css';

interface PasswordToggleButtonProps {
    showPassword: boolean;
    togglePassword: () => void;
}

const PasswordToggleButton = ({ showPassword, togglePassword }: PasswordToggleButtonProps) => {
    return (
        <button
            type='button'
            onClick={togglePassword}
            className={style.button}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
            {showPassword ? 'Hide' : 'Show'}
        </button>
    );
}

export { PasswordToggleButton }