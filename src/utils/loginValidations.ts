export const validateLogin = async (login: string) => {
    if (!login) return 'Login is required';
    if (login.length < 4) return 'Login must be at least 4 characters';

    try {
        const response = await fetch('/api/check-login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login }),
        });
        const { available } = await response.json();
        if (!available) return 'Login is already taken';
    } catch (error) {
        return 'Error checking login availability';
    }
};

export const validateEmail = async (email: string) => {
    if (!email) return 'Email is required';
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) return 'Invalid email address';

    try {
        const response = await fetch('/api/check-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });
        const { available } = await response.json();
        if (!available) return 'Email is already registered';
    } catch (error) {
        return 'Error checking email availability';
    }
};

export const validatePassword = (password: string) => {
    if (!password) return 'Password is required';
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password))
        return 'Password must contain at least one number, one uppercase, one lowercase letter, and one special character';
    if (password.length < 8) return 'Password must be at least 8 characters';
};