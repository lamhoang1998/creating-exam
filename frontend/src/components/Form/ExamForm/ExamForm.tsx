import { Button, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import type { QuestionData } from "../../../types/examForm.types";
import { PlusOutlined } from "@ant-design/icons";
import QuestionForm from "../QuestionForm/QuestionForm";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setExamForm } from "../../../reducers/examForm.reducers";

const subjects = ["Mathematics", "English", "Literature"];

function ExamForm() {
	const [form] = Form.useForm();
	const [questions, setQuestions] = useState<number[]>([]);
	const dispatch = useAppDispatch();
	const savedForm = useAppSelector((store) => store.examFormState);

	// useEffect(() => {
	// 	form.setFieldsValue(savedForm);
	// 	setQuestions(savedForm.questions || []);
	// }, [form, savedForm]);

	const addQuestion = () => {
		const newQuestion = {
			id: Date.now(),
			type: "multiple" as const,
			content: "",
			score: 0,
		};
		setQuestions((prev) => [...prev, prev.length]);
		const updatedForm = form.getFieldsValue();
		updatedForm.questions = [...(updatedForm.questions || []), newQuestion];
		dispatch(setExamForm(updatedForm));
	};

	const onFinish = (values: any) => {
		console.log("Final Exam Form Data", values);
	};

	return (
		<Form form={form} onFinish={onFinish}>
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
					{subjects.map((sub) => (
						<Select.Option key={sub} value={sub}>
							{sub}
						</Select.Option>
					))}
				</Select>
			</Form.Item>

			{questions.map((_, index) => (
				<QuestionForm key={index} index={index} />
			))}

			<Button type="dashed" onClick={addQuestion} block icon={<PlusOutlined />}>
				Add Question
			</Button>

			<Button type="primary" htmlType="submit" className="mt-4">
				Submit Exam
			</Button>
		</Form>
	);
}

export default ExamForm;
