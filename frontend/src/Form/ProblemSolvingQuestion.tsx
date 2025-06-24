import styles from "./ProblemSolvingQuestion.module.css";
import {
	multipleChoiceDefaultValues,
	multipleChoiceSchema,
	type MultipleChoiceSchema,
} from "../zod/multipleChoiceSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function ProblemSolvingQuestion() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<MultipleChoiceSchema>({
		mode: "all",
		resolver: zodResolver(multipleChoiceSchema),
		defaultValues: multipleChoiceDefaultValues,
	});

	const onSubmit = handleSubmit((data) => {
		console.log(data);
	});

	return (
		<form className={styles.multipleChoice} onSubmit={onSubmit}>
			<label className={styles.multipleChoiceQuestionLabel}>
				please enter a question:
				<input
					type="text"
					className={styles.multipleChoiceQuestionInput}
					{...register("question")}
				/>
			</label>
			{errors && (
				<span className={styles.multipleChoiceInputError}>
					{errors.question?.message}
				</span>
			)}
			<label className={styles.multipleChoiceAnswerLabel}>
				image for the question:
			</label>
			<input type="file" />

			<button type="submit">Create</button>
		</form>
	);
}

export default ProblemSolvingQuestion;
