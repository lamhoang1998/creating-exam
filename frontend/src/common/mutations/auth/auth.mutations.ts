import { useMutation } from "@tanstack/react-query";
import type {
	LoginBody,
	LoginResult,
	RegisterBody,
	RegisterResult,
} from "../../../types/auth.types";
import { Api } from "../../axios/axios";
import { ENDPOINT } from "../../constant/endpoint.constant";
import type { AxiosError } from "axios";
import type { ApiErrorResponse } from "../../../types/error.types";

export function useLoginMutation() {
	return useMutation({
		mutationFn: (data: LoginBody) => {
			return Api.post<LoginResult>(ENDPOINT.AUTH.LOGIN, data);
		},
		onError: (error) => {
			console.error("Login mutation failed:", error);
		},
	});
}

export function useRegisterMutation() {
	return useMutation<
		RegisterResult,
		AxiosError<ApiErrorResponse, RegisterBody>,
		RegisterBody
	>({
		mutationFn: async (data: RegisterBody) => {
			const response = await Api.post<RegisterResult>(
				ENDPOINT.AUTH.REGISTER,
				data
			);
			return response.data;
		},
	});
}
