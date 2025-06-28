import { Button, Form, Input, Select } from "antd";
import { useState } from "react";
import type { QuestionData } from "../../../types/examForm.types";
import { PlusOutlined } from "@ant-design/icons";
import QuestionForm from "../QuestionForm/QuestionForm";

const subjects = ["Mathematics", "English", "Literature"];

function ExamForm() {
	const [form] = Form.useForm();
	const [questions, setQuestions] = useState<QuestionData[]>([]);

	const addQuestion = () => {
		setQuestions((prev) => [
			...prev,
			{ id: Date.now(), type: "multiple", content: "", score: 0 },
		]);
	};

	return (
		<Form form={form}>
			<Form.Item name="examName" label="Exam Name" rules={[{ required: true }]}>
				<Input />
			</Form.Item>

			<Form.Item name="subject" label="Subject" rules={[{ required: true }]}>
				<Select placeholder="Select a subject">
					{subjects.map((sub) => (
						<Select.Option key={sub} value={sub}>
							{sub}
						</Select.Option>
					))}
				</Select>
			</Form.Item>

			{questions.map((q, index) => (
				<QuestionForm key={q.id} index={index} />
			))}

			<Button type="dashed" onClick={addQuestion} block icon={<PlusOutlined />}>
				Add Question
			</Button>
		</Form>
	);
}

export default ExamForm;
