import { useState, useCallback } from 'react';
import { authClient } from '@/lib/auth-client';
import { validateLogin, validateEmail, validatePassword } from '@/utils/loginValidations';

interface FormData {
    name: string;
    email: string;
    password: string;
}

interface Errors {
    name?: string;
    email?: string;
    password?: string;
}

export const useRegisterForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<Errors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [touched, setTouched] = useState<{ [key in keyof FormData]?: boolean }>({});

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (touched[name as keyof FormData]) {
            const validateField = async () => {
                let error: string | undefined;
                switch (name) {
                    case 'name':
                        error = await validateLogin(value);
                        break;
                    case 'email':
                        error = await validateEmail(value);
                        break;
                    case 'password':
                        error = validatePassword(value);
                        break;
                }
                setErrors(prev => ({ ...prev, [name]: error }));
            };
            validateField();
        }

    }, [touched]);

    const handleBlur = useCallback(async (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        let error: string | undefined;

        switch (name) {
            case 'name':
                error = await validateLogin(value);
                break;
            case 'email':
                error = await validateEmail(value);
                break;
            case 'password':
                error = validatePassword(value);
                break;
        }

        setErrors(prev => ({ ...prev, [name]: error }));
    }, []);

    const isValid =
        touched.name &&
        touched.email &&
        touched.password &&
        !errors.name &&
        !errors.email &&
        !errors.password &&
        formData.name.trim() !== '' &&
        formData.email.trim() !== '' &&
        formData.password.trim() !== '';

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const validationErrors = {
            name: await validateLogin(formData.name),
            email: await validateEmail(formData.email),
            password: validatePassword(formData.password),
        };

        setErrors(validationErrors);

        if (Object.values(validationErrors).some(error => error)) {
            setIsSubmitting(false);
            return;
        }

        const { name, email, password } = formData;

        try {
            const { data, error } = await authClient.signUp.email({
                email,
                password,
                name,
            });

            if (error) {
                throw error;
            }
        } catch (error) {
            console.log('Registration error:', error);
            alert('An unexpected error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }

    }, [formData]);

    return {
        formData,
        errors,
        isSubmitting,
        isValid,
        handleInputChange,
        handleBlur,
        handleSubmit,
    };
};