import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type LoginSchema, loginSchema } from "../../zod/loginSchema";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useLoginMutation } from "../../common/mutations/auth/auth.mutations";
import {
	setAccessToken,
	setRefreshToken,
	setUserLoginInfo,
} from "../../helpers/auth.helper";
import { toast } from "react-toastify";
import { UserRole } from "../../types/auth.types";
import { setLogin } from "../../reducers/users.reducers";
import { useAppDispatch } from "../../hooks";

function Login() {
	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
	});

	const login = useLoginMutation();

	const onSubmit = handleSubmit((data) => {
		console.log(data);
		login.mutate(data, {
			onSuccess: (data) => {
				console.log("login data", data);
				setAccessToken(data.data.metaData.accessToken);
				setRefreshToken(data.data.metaData.refreshToken);
				setUserLoginInfo(data.data.metaData);

				dispatch(setLogin(data.data.metaData));

				toast.success("successfully signed in");

				navigate(`/${UserRole[data.data.metaData.roleId as number]}`);
			},
		});
	});

	return (
		<div className={styles.appContainer}>
			<div className={styles.loginCard}>
				<h2>Login</h2>
				<form onSubmit={onSubmit}>
					<div className={styles.formGroup}>
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							placeholder="Enter your username"
							{...register("email")}
						/>
					</div>
					{errors.email && (
						<span className="text-red-500">{errors.email.message}</span>
					)}

					<div className={styles.formGroup}>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							placeholder="Enter your password"
							{...register("password")}
						/>
					</div>
					{errors.password && (
						<span className="text-red-500">{errors.password.message}</span>
					)}
					<button type="submit" className={styles.loginButton}>
						Log In
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
