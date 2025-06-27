import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/users.reducers";
import globalModalReducer from "./components/GlobalModal/GlobalModal";

export const store = configureStore({
	reducer: {
		userState: usersReducer,
		globalModalState: globalModalReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ReduxStore = {
	getState: () => RootState;
	dispatch: AppDispatch;
};
