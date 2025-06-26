import { createBrowserRouter } from "react-router-dom";
import RootPage from "../pages/Rootpage/RootPage";
import Login from "../pages/Login/Login";
import DashBoard from "../pages/DashBoard/DashBoard";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";

const rootRouter = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/dashboard",
		element: (
			<RootPage>
				<DashBoard />
			</RootPage>
		),
	},
	{
		path: "/login",
		element: (
			<RootPage>
				<Login />
			</RootPage>
		),
	},
	{
		path: "/register",
		element: (
			<RootPage>
				<Register />
			</RootPage>
		),
	},
]);

export default rootRouter;
