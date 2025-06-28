import useApp from "antd/es/app/useApp";
import { useAppDispatch, useAppSelector } from "../../hooks";
import styles from "./Exams.module.css";
import { setOpenAddExam } from "../../reducers/globalModal.reducers";

function Exams() {
	const dispatch = useAppDispatch();
	const showAddExam = useAppSelector(
		(store) => store.globalModalState.showAddExam
	);

	console.log("showExam", showAddExam);

	return (
		<div>
			<div className={styles.addExamHeader}>
				<span>Exam Management</span>
				<button
					className={styles.addExamBtn}
					onClick={() => dispatch(setOpenAddExam())}
				>
					Add Exam
				</button>
			</div>
		</div>
	);
}

export default Exams;
