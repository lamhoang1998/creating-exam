import { useMutation } from "@tanstack/react-query";
import { Api } from "../../axios/axios";
import { ENDPOINT } from "../../constant/endpoint.constant";
import type { TRes } from "../../../types/app.types";

export function useUploadFileMutation() {
	return useMutation({
		mutationFn: (data: FormData) => {
			return Api.post<TRes<string>>(ENDPOINT.UPLOAD.FILELOCAL, data, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
		},
	});
}
