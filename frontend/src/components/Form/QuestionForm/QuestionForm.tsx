import { Card, Form, Input, InputNumber, Select } from "antd";
import { useState } from "react";
import AnswerListForm from "../AnswerListForm/AnswerListForm";
import LexicalTextEditor from "../../LexicalTextEditor/LexicalTextEditor";
import UploadImg from "../UploadImg/UploadImg";
import RichTextEditor from "../../../lexical/RichTextEditor";

function QuestionForm({ index }: { index: number }) {
	const form = Form.useFormInstance();
	// const [type, setType] = useState("multiple");

	const type = Form.useWatch(["questions", index, "type"], form);

	const contentValue = Form.useWatch(["questions", index, "content"], form);

	return (
		<Card title={`Question ${index + 1}`} className="mb-4">
			<Form.Item name={["questions", index, "type"]} label="Type" preserve>
				<Select placeholder="Select question type">
					<Select.Option value="multiple">Multiple Choice</Select.Option>
					<Select.Option value="problem">Problem Solving</Select.Option>
				</Select>
			</Form.Item>

			<Form.Item
				label="Question"
				name={["questions", index, "content"]}
				rules={[{ required: true, message: "Question content is required" }]}
				preserve
			>
				{/* <LexicalTextEditor
					value={contentValue}
					onChange={(html) => {
						form.setFieldValue(["questions", index, "content"], html);
					}}
				/> */}
				<RichTextEditor
					value={contentValue}
					onChange={(html) => {
						form.setFieldValue(["questions", index, "content"], html);
					}}
				/>
			</Form.Item>
			<Form.Item name={["questions", index, "score"]} label="Score" preserve>
				<InputNumber min={0} />
			</Form.Item>

			{type === "multiple" && <AnswerListForm index={index} />}

			<Form.Item
				label="correctAnswer"
				name={["questions", index, "correctAnswer"]}
			>
				<InputNumber min={0} />
			</Form.Item>
		</Card>
	);
}

export default QuestionForm;
