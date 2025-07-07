import { useEffect, type ReactNode } from "react";
import { useAppSelector } from "../../hooks";
import { UserRole } from "../../types/auth.types";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserLoginInfo } from "../../helpers/auth.helper";

type Props = {
	children: ReactNode;
	allowRoles?: string[];
};

function RootPage({ children, allowRoles }: Props) {
	const loginData = getUserLoginInfo();

	const navigate = useNavigate();

	const location = useLocation();

	console.log("location", location);

	useEffect(() => {
		const currentRole = UserRole[loginData?.roleId as number];

		if (allowRoles) {
			const isAllowed = allowRoles.includes(currentRole);
			if (!loginData || !isAllowed) {
				navigate("/login", { replace: true });
			}
		} else {
			if (loginData) {
				navigate(`/${UserRole[loginData.roleId as number]}`, { replace: true });
			}
		}
	}, [loginData, allowRoles, navigate, location.pathname]);

	return <div>{children}</div>;
}

export default RootPage;
