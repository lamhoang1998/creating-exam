import rootRouter from "../routers/rootRouter";

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

export function logOut() {
	localStorage.removeItem(`accessToken`);
	localStorage.removeItem(`refreshToken`);

	rootRouter.navigate(`/login`);
}
