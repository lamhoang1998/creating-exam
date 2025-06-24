import styles from "./Register.module.css";

function Register() {
	return (
		<div className={styles.appContainer}>
			{/* The register card/form container */}
			<div className={styles.authCard}>
				<h2>Register</h2>
				<form>
					{/* Full Name input group */}
					<div className={styles.formGroup}>
						<label htmlFor="reg-full-name">Full Name</label>
						<input
							type="text"
							id="reg-full-name"
							placeholder="Enter your full name"
							required
						/>
					</div>
					{/* Email input group */}
					<div className={styles.formGroup}>
						<label htmlFor="reg-email">Email</label>
						<input
							type="email"
							id="reg-email"
							placeholder="Enter your email"
							required
						/>
					</div>
					{/* Phone Number input group */}
					<div className={styles.formGroup}>
						<label htmlFor="reg-phone-number">Phone Number</label>
						<input
							type="tel" // Use type="tel" for phone numbers
							id="reg-phone-number"
							placeholder="Enter your phone number"
							required
						/>
					</div>
					{/* Password input group */}
					<div className={styles.formGroup}>
						<label htmlFor="reg-password">Password</label>
						<input
							type="password"
							id="reg-password"
							placeholder="Create a password"
							required
						/>
					</div>
					{/* Submit button */}
					<button type="submit" className={styles.authButton}>
						Register
					</button>
				</form>
			</div>
		</div>
	);
}

export default Register;
