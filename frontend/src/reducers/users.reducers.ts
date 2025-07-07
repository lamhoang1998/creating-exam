import { createSlice } from "@reduxjs/toolkit";
import { getAccessToken, logOut } from "../helpers/auth.helper";
import type { TRes } from "../types/app.types";
import type { UserInfo } from "../types/users.types";
import type { LoginMetaData, LoginResult } from "../types/auth.types";

type InitialState = {
	login: LoginMetaData | null;
	isLogin: boolean;
};

const initialState: InitialState = {
	login: null,
	isLogin: !!getAccessToken(),
};

const usersSlice = createSlice({
	name: "usersSlice",
	initialState,
	reducers: {
		setLogin: (state, { payload }) => {
			state.login = payload;
		},
		UPDATE_IS_LOGIN: (state) => {
			state.isLogin = !!getAccessToken();
		},
	},
});

export const { UPDATE_IS_LOGIN, setLogin } = usersSlice.actions;

export default usersSlice.reducer;

// export const getInfo = () => {
// 	return async (dispatch: AppDispatch) => {
// 		console.log("dispatch");
// 		ApiWithToken.get<TRes<UserInfo>>(ENDPOINT.USER.GETINFO)
// 			.then(({ data }) => {
// 				console.log("user data", data);
// 				dispatch(SET_INFO(data.metaData));
// 			})
// 			.catch(() => {
// 				logOut();
// 			});
// 	};
// };
