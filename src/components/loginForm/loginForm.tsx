"use client";

import { useLoginForm } from "@/hooks/useLoginForm";
import { useDiscordAuth } from "@/hooks/useDiscordAuth";
import { useGoogleAuth } from "@/hooks/useGoogleAuth";

import { Label } from "@/components/label/label";
import { Input } from "@/components/input/input";
import { Button } from "@/components/button/button";
import { SocialLoginButton } from "@/components/socialLoginButton/socialLoginButton";
import { PasswordInput } from "@/components/passwordInput/passwordInput";

import style from "@/components/registerForm/registerForm.module.css";
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
                <hr />
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