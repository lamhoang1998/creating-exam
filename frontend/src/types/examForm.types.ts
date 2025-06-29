export type AnswerOption = {
	text?: string;
};

export type AnswerGroup = {
	answer?: AnswerOption[];
	correctAnswer?: string;
};

export type QuestionType = "multiple" | "problem";

export type QuestionData = {
	type?: QuestionType;
	content?: string;
	score?: number;
	answers?: AnswerGroup;
};

export type ExamFormData = {
	examName?: string;
	subject?: string;
	questions?: QuestionData[];
};
