import { createSlice } from "@reduxjs/toolkit";

type GlobalModalState = {
	showAddExam: boolean;
};

const initialState: GlobalModalState = {
	showAddExam: false,
};

const globalModalSlice = createSlice({
	name: "globalModal",
	initialState,
	reducers: {
		setOpenAddExam: (state) => {
			state.showAddExam = true;
		},
		setCloseAddExam: (state) => {
			state.showAddExam = false;
		},
	},
});

export const { setOpenAddExam, setCloseAddExam } = globalModalSlice.actions;

export default globalModalSlice.reducer;
