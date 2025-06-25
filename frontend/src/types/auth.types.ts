export type RefreshToken = {
	status: string;
	message: string;
	metaData: {
		accessToken: string;
		refreshToken: string;
	};
};
