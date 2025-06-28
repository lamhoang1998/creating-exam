import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCloseAddExam } from "../../reducers/globalModal.reducers";
import ExamForm from "../Form/ExamForm/ExamForm";
import styles from "./AddExam.module.css";
import { Modal } from "antd";

function AddExam() {
	const dispatch = useAppDispatch();

	const showAddExam = useAppSelector(
		(store) => store.globalModalState.showAddExam
	);

	return (
		<>
			<Modal
				title={<h2 className="text-3xl font-bold">Create tasks</h2>}
				open={showAddExam}
				onCancel={() => {
					dispatch(setCloseAddExam());
				}}
				okButtonProps={{ style: { display: "none" } }}
				cancelButtonProps={{ style: { display: "none" } }}
			>
				<ExamForm />
			</Modal>
		</>
	);
}

export default AddExam;
