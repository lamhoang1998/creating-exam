import { useMutation } from "@tanstack/react-query";
import { ApiWithToken } from "../../axios/axios";
import { ENDPOINT } from "../../constant/endpoint.constant";
import type { TRes } from "../../../types/app.types";

export function useUploadFileMutation() {
	return useMutation({
		mutationFn: (data: FormData) => {
			return ApiWithToken.post<TRes<string>>(ENDPOINT.UPLOAD.FILELOCAL, data, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
		},
	});
}
