"use client";

import { useRegisterForm, useDiscordAuth, useGoogleAuth } from "@/hooks/auth";

import { Label, Input, Button } from "@/components/common";
import { SocialLoginButton, PasswordInput } from "@/components/auth";

import style from "./registerForm.module.css";
import Link from "next/link";

const RegisterForm: React.FC = () => {

	const {
		formData,
		errors,
		isSubmitting,
		isValid,
		handleInputChange,
		handleBlur,
		handleSubmit
	} = useRegisterForm();

	const handleDiscordAuth = useDiscordAuth();
	const handleGoogleAuth = useGoogleAuth();

	return (
		<form className={style.form} onSubmit={handleSubmit} noValidate>
			<header>
				<h1>Sign Up</h1>
				<h2>Already have an account? <Link href="/login">Sign In</Link></h2>
			</header>
			<main>
				<div>
					<Label>Login</Label>
					<Input
						type="text"
						name="name"
						placeholder="Enter your login"
						value={formData.name}
						onChange={handleInputChange}
						onBlur={handleBlur}
						disabled={isSubmitting}
						error={!!errors.name}
						required
					/>
					{errors.name && <span className={style.invalidFeedback}>{errors.name}</span>}
				</div>
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
					{errors.email && <span className={style.invalidFeedback}>{errors.email}</span>}
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
					{errors.password && <span className={style.invalidFeedback}>{errors.password}</span>}
				</div>

				<Button
					type="submit"
					disabled={isSubmitting || !isValid}
				>
					{isSubmitting ? 'Submitting...' : 'Sign Up'}
				</Button>
				<div className="relative">
					<hr />
					<span className="text-gray-500 text-xs absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 bg-white text-nowrap uppercase">or join by social account</span>
				</div>
				<div className={style.socialButtons}>
					<SocialLoginButton
						provider="discord"
						onClick={handleDiscordAuth}
						disabled={isSubmitting}
					>
					</SocialLoginButton>
					<SocialLoginButton
						provider="google"
						onClick={handleGoogleAuth}
						disabled={isSubmitting}
					>
					</SocialLoginButton>
				</div>
			</main>
			<footer>
				<div>
					<p className={style.text}>By creating an account you"re agreeing to our <a href="#">Terms</a> & <a href="#">Privacy Policy</a>, and you confirm that you are at least 16 years of age.</p>
				</div>
			</footer>
		</form>
	)

}

export { RegisterForm }