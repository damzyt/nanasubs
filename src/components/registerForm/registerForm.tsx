"use client";

import { useRegisterForm } from "@/hooks/useRegisterForm";

import { Label } from "@/components/label/label";
import { Input } from "@/components/input/input";
import { Button } from "@/components/button/button";
import { SocialLoginButton } from "@/components/socialLoginButton/socialLoginButton";
import { PasswordInput } from "@/components/passwordInput/passwordInput";

import style from "@/components/registerForm/registerForm.module.css";

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

	return (
		<form className={style.form} onSubmit={handleSubmit} noValidate>
			<header>
				<h1>Sign Up</h1>
				<h2>Already have an account? <a href="#">Sign In</a></h2>
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
				<hr />
				<div className={style.socialButtons}>
					<SocialLoginButton
						provider="discord"
						disabled={isSubmitting}
					>
					</SocialLoginButton>
					<SocialLoginButton
						provider="google"
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