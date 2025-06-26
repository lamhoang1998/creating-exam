import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";

const navigationItems = [
	{
		path: "/admin/users",
		label: "Users",
		icon: "👥",
	},
	{
		path: "/admin/exams",
		label: "Exams",
		icon: "📝",
	},
	{
		path: "/admin/answers",
		label: "Answers",
		icon: "✅",
	},

	{
		path: "/admin/settings",
		label: "Settings",
		icon: "⚙️",
	},
	{
		path: "/admin/reports",
		label: "Reports",
		icon: "📈",
		badge: "New",
	},
];

function SideBar() {
	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebarHeader}>
				<h2 className={styles.sidebarTitle}>Admin Panel</h2>
			</div>

			<nav className={styles.navigation}>
				{navigationItems.map((item) => (
					<NavLink
						key={item.path}
						to={item.path}
						className={({ isActive }) =>
							`${styles.navItem} ${isActive ? styles.active : ""}`
						}
					>
						{item.icon && <span className={styles.icon}>{item.icon}</span>}

						<span className={styles.label}>{item.label}</span>

						{item.badge && <span className={styles.badge}>{item.badge}</span>}
					</NavLink>
				))}
			</nav>
		</div>
	);
}

export default SideBar;
