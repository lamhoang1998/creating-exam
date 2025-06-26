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

type SideBarProps = {
	collapsed: boolean;
	onToggle: () => void;
};

function SideBar({ collapsed, onToggle }: SideBarProps) {
	return (
		<div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
			<div className={styles.sidebarHeader}>
				{!collapsed && <h2 className={styles.sidebarTitle}>Admin Panel</h2>}
				<button className={styles.toggleButton} onClick={onToggle}>
					{collapsed ? "→" : "←"}
				</button>
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
