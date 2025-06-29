import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Radio, Space } from "antd";

// function AnswerListForm({ index }: { index: number }) {
// 	return (
// 		<Form.List name={["questions", index, "answers"]}>
// 			{(fields, { add, remove }) => (
// 				<>
// 					<Form.Item label="Answers" required style={{ marginBottom: 0 }}>
// 						<Form.Item
// 							name={["questions", index, "correctAnswerIndex"]}
// 							rules={[
// 								{
// 									required: true,
// 									message: "Please select the correct answer",
// 								},
// 							]}
// 							style={{ marginBottom: 0 }}
// 						>
// 							<Radio.Group style={{ width: "100%" }}>
// 								<Space direction="vertical" style={{ width: "100%" }}>
// 									{fields.map((field, i) => (
// 										<Space
// 											key={field.key}
// 											align="start"
// 											style={{ display: "flex", width: "100%" }}
// 										>
// 											<Radio value={i} style={{ marginTop: 6 }} />
// 											<Form.Item
// 												{...field}
// 												name={[field.name, "text"]}
// 												style={{ flex: 1, marginBottom: 0 }}
// 												rules={[{ required: true, message: "Answer required" }]}
// 											>
// 												<Input placeholder={`Answer ${i + 1}`} />
// 											</Form.Item>
// 											<MinusCircleOutlined
// 												onClick={() => remove(field.name)}
// 												style={{ marginTop: 8 }}
// 											/>
// 										</Space>
// 									))}
// 								</Space>
// 							</Radio.Group>
// 						</Form.Item>
// 					</Form.Item>

// 					<Form.Item>
// 						<Button
// 							type="dashed"
// 							block
// 							icon={<PlusOutlined />}
// 							onClick={() => add({ text: "" })}
// 						>
// 							Add Answer
// 						</Button>
// 					</Form.Item>
// 				</>
// 			)}
// 		</Form.List>
// 	);
// }

question: {
	type: ["multiple choice", "problem solving"];
	content: "question content";
	score: "score";
	answer: {
		answerList: ["answer"];
		correctAnswer: "";
	}
}

function AnswerListForm({ index }: { index: number }) {
	return (
		<>
			<Form.List name={["questions", index, "answers", "answer"]}>
				{(fields, { add, remove }) => (
					<>
						<Form.Item
							label=" Answer"
							name={["questions", "answer"]}
							rules={[
								{ required: true, message: "Please select a correct answer" },
							]}
						>
							<Radio.Group style={{ width: "100%" }}>
								<Space direction="vertical" style={{ width: "100%" }}>
									{fields.map((field, i) => (
										<Space
											key={field.key}
											style={{ display: "flex", width: "100%" }}
											align="start"
										>
											<Radio value={i} style={{ marginTop: 8 }} />

											<Form.Item
												{...field}
												name={[field.name, "text"]}
												style={{ flex: 1, marginBottom: 0 }}
												rules={[
													{ required: true, message: "Answer is required" },
												]}
											>
												<Input placeholder={`Answer ${i + 1}`} />
											</Form.Item>

											<MinusCircleOutlined
												onClick={() => remove(field.name)}
												style={{ marginTop: 8 }}
											/>
										</Space>
									))}
								</Space>
							</Radio.Group>
						</Form.Item>

						<Form.Item>
							<Button
								type="dashed"
								block
								icon={<PlusOutlined />}
								onClick={() => add({ text: "" })}
							>
								Add Answer
							</Button>
						</Form.Item>
					</>
				)}
			</Form.List>

			<Form.Item
				label="correctAnswer"
				name={["questions", index, "answers", "correctAnswer"]}
			>
				<Input />
			</Form.Item>
		</>
	);
}

export default AnswerListForm;
