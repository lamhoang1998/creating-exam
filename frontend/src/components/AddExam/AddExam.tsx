import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCloseAddExam } from "../../reducers/globalModal.reducers";
import type { ExamFormData, QuestionData } from "../../types/examForm.types";
import QuestionForm from "../Form/QuestionForm/QuestionForm";
import styles from "./AddExam.module.css";
import { Button, Form, Input, Modal, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { setExamForm } from "../../reducers/examForm.reducers";
import debounce from "lodash/debounce";

const subjects = ["Mathematics", "English", "Literature"];

function AddExam() {
	const dispatch = useAppDispatch();

	const showAddExam = useAppSelector(
		(store) => store.globalModalState.showAddExam
	);

	const examFormState = useAppSelector((store) => store.examFormState);

	const [form] = Form.useForm();
	const [questions, setQuestions] = useState<number[]>([]);

	const onFinish = (values: any) => {
		console.log("Final Exam Form Data", values);
	};

	useEffect(() => {
		if (showAddExam && examFormState) {
			const keys = examFormState?.questions?.map((_, i) => i) ?? [];

			// const cleanedQuestions = examFormState.questions?.map((q) => ({
			// 	...q,
			// 	content: htmlToText(q.content || ""),
			// }));

			setQuestions(keys);
			// form.setFieldsValue({
			// 	...examFormState,
			// 	questions: cleanedQuestions,
			// });
			form.setFieldsValue(examFormState);
		}
	}, [showAddExam, examFormState]);

	const addQuestion = () => {
		setQuestions((prev) => [...prev, prev.length]);
		// const updatedForm = form.getFieldsValue();
		// updatedForm.questions = [...(updatedForm.questions || []), newQuestion];
		// dispatch(setExamForm(updatedForm));
	};

	const debounceSave = useRef(
		debounce((values) => {
			dispatch(setExamForm(values));
		}, 300)
	).current;

	return (
		<>
			<Modal
				title={<h2 className="text-3xl font-bold">Add Exams</h2>}
				width={980}
				open={showAddExam}
				onCancel={() => {
					dispatch(setCloseAddExam());
					form.resetFields();
				}}
				okButtonProps={{ style: { display: "none" } }}
				cancelButtonProps={{ style: { display: "none" } }}
			>
				<Form
					form={form}
					onFinish={onFinish}
					// onValuesChange={(_, all) => {
					// 	const allValues = all as ExamFormData;

					// 	console.log("all values", allValues);

					// 	const normalizedQuestions =
					// 		allValues.questions?.map((question) => ({
					// 			...question,
					// 			content: htmlToText(question.content || ""),
					// 		})) ?? [];

					// 	const normalizedValues = {
					// 		...allValues,
					// 		questions: normalizedQuestions,
					// 	};

					// 	debounceSave(allValues);
					// }}
					onFieldsChange={() => {
						const values = form.getFieldsValue();
						console.log("Updated form values (fieldsChange):", values);
						debounceSave(values);
					}}
				>
					<Form.Item
						name="examName"
						label="Exam Name"
						rules={[{ required: true }]}
						preserve
					>
						<Input />
					</Form.Item>

					<Form.Item
						name="subject"
						label="Subject"
						rules={[{ required: true }]}
						preserve
					>
						<Select placeholder="Select a subject">
							{subjects?.map((sub) => (
								<Select.Option key={sub} value={sub}>
									{sub}
								</Select.Option>
							))}
						</Select>
					</Form.Item>

					{questions.length > 0 &&
						questions?.map((_, index) => (
							<QuestionForm key={index} index={index} />
						))}

					<Button
						type="dashed"
						onClick={addQuestion}
						block
						icon={<PlusOutlined />}
					>
						Add Question
					</Button>

					<Button type="primary" htmlType="submit" className="mt-4">
						Submit Exam
					</Button>
				</Form>
			</Modal>
		</>
	);
}

export default AddExam;
