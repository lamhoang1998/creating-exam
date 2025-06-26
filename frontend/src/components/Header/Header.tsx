import styles from "./Header.module.css";

function Header() {
	return (
		<div className={styles.header}>
			<h1 className={styles.title}>Dashboard</h1>
			<div className={styles.actions}>
				<span className={styles.welcomeText}>Welcome, Admin</span>
				<button className={styles.logoutButton}>Logout</button>
			</div>
		</div>
	);
}

export default Header;
