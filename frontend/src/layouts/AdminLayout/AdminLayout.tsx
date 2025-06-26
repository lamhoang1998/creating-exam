import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import styles from "./AdminLayout.module.css";
import { useState } from "react";

function AdminLayout() {
	const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

	const toggleSidebar = () => {
		setSidebarCollapsed(!sidebarCollapsed);
	};

	return (
		<div className={styles.adminLayOutContainer}>
			<SideBar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />
			<Header collapsed={sidebarCollapsed} onToggle={toggleSidebar} />
			<div
				className={`${styles.outletContainer} ${
					sidebarCollapsed ? styles.collapsed : ""
				}`}
			>
				<Outlet />
			</div>
		</div>
	);
}

export default AdminLayout;
