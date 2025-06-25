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

export type RegisterBody = {
	email: string;
	password: string;
};
type RegisterMetaData = {
	userId: number;
	email: string;
	fullName: string;
	avatar: any;
	createdAt: string;
	updatedAt: string;
};

export type RegisterResult = TRes<RegisterMetaData>;
