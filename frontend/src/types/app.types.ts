export type TRes<T> = {
	status: string;
	code: number;
	message: string;
	metaData: T;
};

export type LoginBody = {
	email: string;
	password: string;
};

// export type LoginMetaData = {
// 	accessToken: string;
// 	refreshToken: string;
// };
