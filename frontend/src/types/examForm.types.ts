export type QuestionType = "multiple" | "problem";

export type AnswerOption = {
	text: string;
};

export type QuestionData = {
	id: number;
	type: QuestionType;
	content: string;
	score: number;
	answers?: AnswerOption[];
	correctAnswerIndex?: number;
};

export type ExamFormData = {
	examName: string;
	subject: string;
	questions: QuestionData[];
};
