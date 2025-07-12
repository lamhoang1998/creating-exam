import { useMutation } from "@tanstack/react-query";
import type { Exam, GiveExam } from "../../../types/exams.types";
import { ApiWithToken } from "../../axios/axios";
import { ENDPOINT } from "../../constant/endpoint.constant";

export function useAddExamMutation() {
	return useMutation({
		mutationFn: (data: Exam) => {
			return ApiWithToken.post<string>(ENDPOINT.EXAM.ADDEXAM, data);
		},
	});
}

export function useGiveExamMutation() {
	return useMutation({
		mutationFn: (data: GiveExam) => {
			return ApiWithToken.post<string>(ENDPOINT.EXAM.GIVEEXAM, data);
		},
	});
}
