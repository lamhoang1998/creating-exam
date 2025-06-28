import { Card, Form, InputNumber, Select } from "antd";
import { useState } from "react";
import AnswerListForm from "../AnswerListForm/AnswerListForm";
import LexicalTextEditor from "../../LexicalTextEditor/LexicalTextEditor";

function QuestionForm({ index }: { index: number }) {
	const form = Form.useFormInstance();
	const [type, setType] = useState("multiple");

	return (
		<Card title={`Question ${index + 1}`} className="mb-4">
			<Form.Item name={["questions", index, "type"]} label="Type">
				<Select value={type} onChange={setType}>
					<Select.Option value="multiple">Multiple Choice</Select.Option>
					<Select.Option value="problem">Problem Solving</Select.Option>
				</Select>
			</Form.Item>

			<Form.Item
				label="Question"
				name={["questions", index, "content"]}
				rules={[{ required: true, message: "Question content is required" }]}
			>
				<LexicalTextEditor
					onChange={(html) => {
						form.setFieldValue(["questions", index, "content"], html);
					}}
				/>
			</Form.Item>
			<Form.Item name={["questions", index, "score"]} label="Score">
				<InputNumber min={0} />
			</Form.Item>

			{type === "multiple" && <AnswerListForm index={index} />}
		</Card>
	);
}

export default QuestionForm;
