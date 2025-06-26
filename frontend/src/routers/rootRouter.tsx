import { createBrowserRouter } from "react-router-dom";
import RootPage from "../pages/Rootpage/RootPage";
import Login from "../pages/Login/Login";
import DashBoard from "../pages/DashBoard/DashBoard";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import User from "../pages/Users/User";
import Exams from "../pages/Exams/Exams";
import Answers from "../pages/Answers/Answers";

const rootRouter = createBrowserRouter([
	{
		path: "/",
		element: <AdminLayout />,
	},
	{
		path: "/admin",
		element: <AdminLayout />,
		children: [
			{ path: "users", element: <User /> },
			{ path: "exams", element: <Exams /> },
			{ path: "answers", element: <Answers /> },
		],
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
