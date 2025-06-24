import styles from "./Login.module.css";

function Login() {
	return (
		<div className={styles.appContainer}>
			<div className={styles.loginCard}>
				<h2>Login</h2>
				<form >
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
