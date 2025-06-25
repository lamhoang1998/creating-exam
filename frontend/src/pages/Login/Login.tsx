import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type LoginSchema, loginSchema } from "../../zod/loginSchema";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useLoginMutation } from "../../common/mutations/auth/auth.mutations";
import { setAccessToken, setRefreshToken } from "../../helpers/auth.helper";

function Login() {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
	});

	const login = useLoginMutation();

	const onSubmit = handleSubmit((data) => {
		login.mutate(data, {
			onSuccess: (data) => {
				setAccessToken(data.data.metaData.accessToken);
				setRefreshToken(data.data.metaData.refreshToken);

				toast.success("successfully signed in");

				navigate("/");
			},
		});
	});

	return (
		<div className={styles.appContainer}>
			<div className={styles.loginCard}>
				<h2>Login</h2>
				<form>
					<div className={styles.formGroup}>
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							placeholder="Enter your username"
							required
						/>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							placeholder="Enter your password"
							required
						/>
					</div>
					<button type="submit" className={styles.loginButton}>
						Log In
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
