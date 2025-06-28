import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Radio } from "antd";
import { useState } from "react";

function AnswerListForm({ index }: { index: number }) {
	const [answers, setAnswers] = useState([0]);

	const addAnswer = () => setAnswers((prev) => [...prev, prev.length]);

	return (
		<div>
			<Form.Item label="Answers">
				{answers.map((_, answerIndex) => (
					<Form.Item
						key={answerIndex}
						name={["questions", index, "answers", answerIndex, "text"]}
						className="flex items-center gap-2"
					>
						<Input placeholder={`Answer ${answerIndex + 1}`} />
					</Form.Item>
				))}
				<Form.Item
					name={["questions", index, "correctAnswerIndex"]}
					label="Correct Answer"
				>
					<Radio.Group>
						{answers.map((_, i) => (
							<Radio key={i} value={i}>
								Answer {i + 1}
							</Radio>
						))}
					</Radio.Group>
				</Form.Item>
			</Form.Item>

			<Button
				onClick={addAnswer}
				icon={<PlusOutlined />}
				type="dashed"
				size="small"
			>
				Add Answer
			</Button>
		</div>
	);
}

export default AnswerListForm;
