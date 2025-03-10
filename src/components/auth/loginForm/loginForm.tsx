"use client";

import { useLoginForm, useDiscordAuth, useGoogleAuth } from "@/hooks/auth";

import { Label, Input, Button } from "@/components/common";
import { SocialLoginButton, PasswordInput } from "@/components/auth";

import style from "@/components/auth/registerForm/registerForm.module.css";
import Link from "next/link";

const LoginForm: React.FC = () => {
    const {
        formData,
        errors,
        isSubmitting,
        isValid,
        authError,
        handleInputChange,
        handleBlur,
        handleSubmit
    } = useLoginForm();

    const handleDiscordAuth = useDiscordAuth();
    const handleGoogleAuth = useGoogleAuth();

    return (
        <form className={style.form} onSubmit={handleSubmit} noValidate>
            <header>
                <h1>Sign In</h1>
                <h2>Don't have an account? <Link href="/join">Sign Up</Link></h2>
            </header>
            <main>
                <div>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        error={!!errors.email}
                        required
                    />
                    {errors.email && !authError && <span className={style.invalidFeedback}>{errors.email}</span>}
                </div>
                <div>
                    <Label>Password</Label>
                    <PasswordInput
                        value={formData.password}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        error={!!errors.password}
                    />
                    {authError && <span className={style.invalidFeedback}>{authError}</span>}
                    {!authError && errors.password && <span className={style.invalidFeedback}>{errors.password}</span>}
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                >
                    {isSubmitting ? 'Signing In...' : 'Sign In'}
                </Button>
                <div className="relative">
                    <hr />
                    <span className="text-gray-500 text-xs absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 bg-white text-nowrap uppercase">or login by social account</span>
                </div>
                <div className={style.socialButtons}>
                    <SocialLoginButton
                        provider="discord"
                        onClick={handleDiscordAuth}
                        disabled={isSubmitting}
                    />
                    <SocialLoginButton
                        provider="google"
                        onClick={handleGoogleAuth}
                        disabled={isSubmitting}
                    />
                </div>
            </main>
        </form>
    )
}

export { LoginForm };