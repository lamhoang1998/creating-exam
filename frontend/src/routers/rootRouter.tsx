import { createBrowserRouter } from "react-router-dom";
import RootPage from "../pages/Rootpage/RootPage";
import Login from "../pages/Login/Login";
import DashBoard from "../pages/DashBoard/DashBoard";
import Register from "../pages/Register/Register";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import User from "../pages/Users/User";
import Exams from "../pages/Exams/Exams";
import Answers from "../pages/Answers/Answers";
import StudentLayout from "../layouts/StudentLayout/StudentLayout";
import Courses from "../pages/Courses/Courses";
import Grade from "../pages/Grade/Grade";
import UserDetails from "../pages/UserDetails/UserDetails";

const rootRouter = createBrowserRouter([
	{
		path: "/",
		element: <AdminLayout />,
	},
	{
		path: "/admin",
		element: (
			<RootPage allowRoles={["admin"]}>
				<AdminLayout />
			</RootPage>
		),
		children: [
			{ path: "users", element: <User /> },
			{ path: "exams", element: <Exams /> },
			{ path: "answers", element: <Answers /> },
		],
	},
	{
		path: "/student",
		element: <StudentLayout />,
		children: [
			{ path: "courses", element: <Courses /> },
			{ path: "grade", element: <Grade /> },
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
	{
		path: "/details/:id",
		element: (
			<RootPage allowRoles={["admin", "student"]}>
				<UserDetails />
			</RootPage>
		),
	},
]);

export default rootRouter;
