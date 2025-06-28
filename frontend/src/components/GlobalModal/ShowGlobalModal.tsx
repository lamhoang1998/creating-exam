import type { ReactElement } from "react";
import { useAppSelector } from "../../hooks";
import AddExam from "../AddExam/AddExam";

function ShowGlobalModal({ children }: { children: ReactElement }) {
	return (
		<>
			{/* {showAddExam && <AddExam />} */}
			{children}
		</>
	);
}

export default ShowGlobalModal;
