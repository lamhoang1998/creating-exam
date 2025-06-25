export function getAccessToken() {
	return localStorage.getItem("accessToken");
}

export function setAccessToken(data: string) {
	localStorage.setItem("accessToken", data);
}

export function getRefreshToken() {
	return localStorage.getItem("refreshToken");
}

export function setRefreshToken(data: string) {
	localStorage.setItem("refreshToken", data);
}
