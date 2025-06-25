import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
	protect?: boolean;
};

function RootPage({ children, protect = false }: Props) {
	return <div>{children}</div>;
}

export default RootPage;
