import styles from "./Header.module.css";

type props = {
	collapsed: boolean;
	onToggle: () => void;
};

function Header({ collapsed, onToggle }: props) {
	return (
		<div className={`${styles.header} ${collapsed ? styles.collapsed : ""}`}>
			<div className={styles.headerTitle}>
				<h1 className={styles.title}>Dashboard</h1>
				{collapsed && (
					<button className={styles.headerTitleBtn} onClick={onToggle}>
						←
					</button>
				)}
			</div>
			<div className={styles.actions}>
				<span className={styles.welcomeText}>Welcome, Admin</span>
				<button className={styles.logoutButton}>Logout</button>
			</div>
		</div>
	);
}

export default Header;
