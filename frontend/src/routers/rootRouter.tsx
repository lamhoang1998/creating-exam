import { createBrowserRouter } from "react-router-dom";
import RootPage from "../pages/Rootpage/RootPage";
import Login from "../pages/Login/Login";
import DashBoard from "../pages/DashBoard/DashBoard";

const rootRouter = createBrowserRouter([
	{
		path: "/dashboard",
		element: <DashBoard />,
	},
	{
		path: "/login",
		element: (
			<RootPage>
				<Login />
			</RootPage>
		),
	},
]);

export default rootRouter;
