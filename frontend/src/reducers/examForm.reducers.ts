import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ExamFormData } from "../types/examForm.types";

const initialState: ExamFormData = {
	examName: "",
	subject: "",
	questions: [],
};

const examFormSlice = createSlice({
	name: "examForm",
	initialState,
	reducers: {
		setExamForm: (state, action: PayloadAction<ExamFormData>) => {
			state.examName = action.payload.examName;
			state.subject = action.payload.subject;
			state.questions = action.payload.questions;
		},
		clearExamForm: () => initialState,
	},
});

export const { setExamForm, clearExamForm } = examFormSlice.actions;
export default examFormSlice.reducer;
