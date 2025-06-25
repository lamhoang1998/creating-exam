import styles from "./Register.module.css";
import { useForm } from "react-hook-form";
import { type RegisterSchema, registerSchema } from "../../zod/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "../../common/mutations/auth/auth.mutations";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) });

	const registerMutation = useRegisterMutation();

	const onSubmit = handleSubmit((data) => {
		console.log(data);
		registerMutation.mutate(data, {
			onSuccess: (data) => {
				toast.success(`${data.message}`);

				navigate("/login");
			},
			onError: (err) => {
				toast.error(`${err.message}`);
			},
		});
	});

	return (
		<div className={styles.appContainer}>
			<div className={styles.authCard}>
				<h2>Register</h2>
				<form onSubmit={onSubmit}>
					<div className={styles.formGroup}>
						<label htmlFor="reg-full-name">Full Name</label>
						<input
							type="text"
							id="reg-full-name"
							placeholder="Enter your full name"
							{...register("fullName")}
						/>
					</div>
					{errors.fullName && (
						<span className="text-red-500">{errors.fullName?.message}</span>
					)}

					<div className={styles.formGroup}>
						<label htmlFor="reg-email">Email</label>
						<input
							type="email"
							id="reg-email"
							placeholder="Enter your email"
							{...register("email")}
						/>
					</div>
					{errors.email && (
						<span className="text-red-500">{errors.email.message}</span>
					)}

					<div className={styles.formGroup}>
						<label htmlFor="reg-phone-number">Phone Number</label>
						<input
							type="tel"
							id="reg-phone-number"
							placeholder="Enter your phone number"
							{...register("phoneNumber")}
						/>
					</div>
					{errors.phoneNumber && (
						<span className="text-red-500">{errors.phoneNumber.message}</span>
					)}

					<div className={styles.formGroup}>
						<label htmlFor="reg-password">Password</label>
						<input
							type="password"
							id="reg-password"
							placeholder="Create a password"
							{...register("password")}
						/>
					</div>
					<button type="submit" className={styles.authButton}>
						Register
					</button>
				</form>
			</div>
		</div>
	);
}

export default Register;
