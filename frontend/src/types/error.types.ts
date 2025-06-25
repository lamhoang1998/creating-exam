export interface ApiErrorResponse {
	status: string;
	code: number;
	message: string;
	stack: string | null;
}
