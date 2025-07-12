export type Exam = {
	examName: string;
	subject: string;
	questions: Question[];
};

export type Question = {
	type: string;
	content: string;
	score: number;
	correctAnswer: number;
	answers?: Answers;
};

export type Answers = {
	answer: Answer[];
};

export type Answer = {
	text: string;
};

export type GiveExam = {
	userId: number;
	exam: string;
};
