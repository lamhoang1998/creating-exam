import styles from "./Header.module.css";

type props = {
	collapsed: boolean;
};

function Header({ collapsed }: props) {
	return (
		<div className={`${styles.header} ${collapsed ? styles.collapsed : ""}`}>
			<h1 className={styles.title}>Dashboard</h1>
			<div className={styles.actions}>
				<span className={styles.welcomeText}>Welcome, Admin</span>
				<button className={styles.logoutButton}>Logout</button>
			</div>
		</div>
	);
}

export default Header;
