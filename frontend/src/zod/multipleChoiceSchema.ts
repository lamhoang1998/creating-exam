import { z } from "zod";

const multipleChoiceSchema = z.object({
	question: z.string().min(1, { message: "please enter the question!" }),
	answerOne: z.string().min(1, { message: "please enter the first answer!" }),
	answerTwo: z.string().min(1, { message: "please enter the second answer!" }),
	answerThree: z.string().min(1, { message: "please enter the third answer!" }),
	answerFour: z.string().min(1, { message: "please enter the fourth answer!" }),
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
