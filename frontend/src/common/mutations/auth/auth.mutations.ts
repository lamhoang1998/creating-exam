import { useMutation } from "@tanstack/react-query";
import type { LoginBody, LoginResult } from "../../../types/auth.types";
import { Api } from "../../axios/axios";
import { ENDPOINT } from "../../constant/endpoint.constant";

export function useLoginMutation() {
	return useMutation({
		mutationFn: (data: LoginBody) => {
			return Api.post<LoginResult>(ENDPOINT.AUTH.LOGIN, data);
		},
	});
}
