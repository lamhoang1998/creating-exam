import type { UploadFile } from "antd";

export type AnswerOption = {
	text?: string;
};

export type AnswerGroup = {
	answer?: AnswerOption[];
	correctAnswer?: string;
};

export type QuestionType = "multiple" | "problem";

// export type UploadedImage = {
// 	name: string;
// 	url: string;
// };

export type ProblemImageData = {
	name: string;
	url: string;
};

export type QuestionData = {
	type?: QuestionType;
	content?: string;
	score?: number;
	answers?: AnswerGroup;
	problemImage?: ProblemImageData[];
};

export type ExamFormData = {
	examName?: string;
	subject?: string;
	questions?: QuestionData[];
};
