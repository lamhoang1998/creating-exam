import { createSlice } from "@reduxjs/toolkit";
import { ApiWithToken } from "../common/axios/axios";
import { ENDPOINT } from "../common/constant/endpoint.constant";
import { getAccessToken, logOut } from "../helpers/auth.helper";
import type { AppDispatch } from "../store";
import type { TRes } from "../types/app.types";
import type { UserInfo } from "../types/users.types";

type InitialState = {
	info: UserInfo | null;
	isLogin: boolean;
};

const initialState: InitialState = {
	info: null,
	isLogin: !!getAccessToken(),
};

const usersSlice = createSlice({
	name: "usersSlice",
	initialState,
	reducers: {
		SET_INFO: (state, { payload }) => {
			state.info = payload;
		},
		UPDATE_IS_LOGIN: (state) => {
			state.isLogin = !!getAccessToken();
		},
	},
});

export const { UPDATE_IS_LOGIN, SET_INFO } = usersSlice.actions;

export default usersSlice.reducer;

export const getInfo = () => {
	return async (dispatch: AppDispatch) => {
		console.log("dispatch");
		ApiWithToken.get<TRes<UserInfo>>(ENDPOINT.USER.GETINFO)
			.then(({ data }) => {
				console.log("user data", data);
				dispatch(SET_INFO(data.metaData));
			})
			.catch(() => {
				logOut();
			});
	};
};
