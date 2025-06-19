import { z } from "zod";

const multipleChoiceSchema = z.object({
	question: z.string(),
	answerOne: z.string(),
	answerTwo: z.string(),
	answerThree: z.string(),
	answerFour: z.string(),
});

type MultipleChoiceSchema = z.infer<typeof multipleChoiceSchema>;

const multipleChoiceDefaultValues: MultipleChoiceSchema = {
	question: "",
	answerOne: "",
	answerTwo: "",
	answerThree: "",
	answerFour: "",
};

export {
	multipleChoiceSchema,
	type MultipleChoiceSchema,
	multipleChoiceDefaultValues,
};
