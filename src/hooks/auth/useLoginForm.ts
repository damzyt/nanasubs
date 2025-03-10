import { useState, useCallback } from 'react';
import { authClient } from '@/lib/auth-client';

interface FormData {
    email: string;
    password: string;
}

interface Errors {
    email?: string;
    password?: string;
}

export const useLoginForm = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<Errors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [authError, setAuthError] = useState<string | null>(null);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setAuthError(null);

        // Basic presence validation
        if (!value.trim()) {
            setErrors(prev => ({ ...prev, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required` }));
        } else {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    }, []);

    const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (!value.trim()) {
            setErrors(prev => ({ ...prev, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required` }));
        }
    }, []);

    const isValid =
        formData.email.trim() !== '' &&
        formData.password.trim() !== '' &&
        !errors.email &&
        !errors.password;

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setAuthError(null);

        // Final validation check
        const validationErrors = {
            email: formData.email.trim() ? undefined : 'Email is required',
            password: formData.password.trim() ? undefined : 'Password is required'
        };

        setErrors(validationErrors);

        if (Object.values(validationErrors).some(error => error)) {
            setIsSubmitting(false);
            return;
        }

        try {
            const { error } = await authClient.signIn.email({
                email: formData.email,
                password: formData.password,
            });

            if (error) throw error;
        } catch (error) {
            console.log('Login error:', error);
            setAuthError('Invalid credentials');
            setErrors({
                email: ' ',
                password: ' '
            });
        } finally {
            setIsSubmitting(false);
        }
    }, [formData]);

    return {
        formData,
        errors,
        isSubmitting,
        isValid,
        authError,
        handleInputChange,
        handleBlur,
        handleSubmit,
    };
};