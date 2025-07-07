import rootRouter from "../routers/rootRouter";
import type { LoginMetaData } from "../types/auth.types";

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

export function setUserLoginInfo(userLogin: LoginMetaData) {
	localStorage.setItem("loginInfo", JSON.stringify(userLogin));
}

export function getUserLoginInfo(): LoginMetaData | null {
	const data = localStorage.getItem("loginInfo");

	if (!data) return null;

	const parsed: LoginMetaData = JSON.parse(data);
	return parsed;
}

export function logOut() {
	localStorage.removeItem(`accessToken`);
	localStorage.removeItem(`refreshToken`);

	rootRouter.navigate(`/login`);
}
