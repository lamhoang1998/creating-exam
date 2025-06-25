import type { TRes } from "./app.types";

export type RefreshToken = {
	status: string;
	message: string;
	metaData: {
		accessToken: string;
		refreshToken: string;
	};
};

export type LoginBody = {
	email: string;
	password: string;
};

export type LoginMetaData = {
	accessToken: string;
	refreshToken: string;
};

export type LoginResult = TRes<LoginMetaData>;
