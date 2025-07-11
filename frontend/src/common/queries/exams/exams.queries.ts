import { useQuery } from "@tanstack/react-query";
import { ApiWithToken } from "../../axios/axios";
import { ENDPOINT } from "../../constant/endpoint.constant";
import type { TRes } from "../../../types/app.types";
import type { UserInfo } from "../../../types/users.types";

export function useGetStudentQuery() {
	return useQuery({
		queryKey: ["students"],
		queryFn: async () => {
			const students = ApiWithToken.get<TRes<UserInfo[]>>(
				ENDPOINT.USER.GETSTUDENT
			);
			return students;
		},
	});
}
