import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import styles from "./AdminLayout.module.css";

function AdminLayout() {
	return (
		<div className={styles.adminLayOutContainer}>
			<SideBar />
			<Header />
			<div className={styles.outletContainer}>
				<Outlet />
			</div>
		</div>
	);
}

export default AdminLayout;
