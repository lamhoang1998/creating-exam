import { useQuery } from "@tanstack/react-query";
import { ApiWithToken } from "../../axios/axios";
import { ENDPOINT } from "../../constant/endpoint.constant";
import type { TRes } from "../../../types/app.types";
import type { UserInfo } from "../../../types/users.types";

export function useGetStudentQuery() {
	return useQuery({
		queryKey: ["students"],
		queryFn: async () => {
			const students = await ApiWithToken.get<TRes<UserInfo[]>>(
				ENDPOINT.USER.GETSTUDENT
			);
			return students;
		},
	});
}

export function useGetStudentDetailsQuery(userId: number) {
	return useQuery({
		queryKey: ["studentDetails", "userId"],
		queryFn: async () => {
			const data = await ApiWithToken.get<TRes<UserInfo>>(
				`${ENDPOINT.USER.GETSTUDENTDETAILS}/{}`
			);
		},
	});
}
