import { create } from "zustand";

export type QuestionAndAnswer = {
	question: string;
	answerOne: string;
	answerTwo: string;
	answerThree: string;
	answerFour: string;
};

type State = {
	exam: QuestionAndAnswer[] | null;
	updateExam: (question: QuestionAndAnswer) => void;
};

export const useStore = create<State>((set) => ({
	exam: null,
	updateExam: (question) =>
		set((state) => ({
			...state,
			exam: state.exam ? [...state.exam, question] : [question],
		})),
}));
