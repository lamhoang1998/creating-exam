import {
	multipleChoiceDefaultValues,
	multipleChoiceSchema,
	type MultipleChoiceSchema,
} from "../zod/multipleChoiceSchema";
import styles from "./MultipleChoice.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function MultipleChoice() {
	const { register, handleSubmit } = useForm<MultipleChoiceSchema>({
		mode: "all",
		resolver: zodResolver(multipleChoiceSchema),
		defaultValues: multipleChoiceDefaultValues,
	});

	return (
		<form className={styles.multipleChoice}>
			<label className={styles.multipleChoiceQuestionLabel}>
				please enter a question:
				<input
					type="text"
					className={styles.multipleChoiceQuestionInput}
					{...register("question")}
				/>
			</label>
			<label className={styles.multipleChoiceAnswerLabel}>
				please enter answers:
			</label>
			<input
				type="text"
				className={styles.multipleChoiceAnswerInput}
				{...register("answerOne")}
			/>
			<input
				type="text"
				className={styles.multipleChoiceAnswerInput}
				{...register("answerTwo")}
			/>
			<input
				type="text"
				className={styles.multipleChoiceAnswerInput}
				{...register("answerThree")}
			/>
			<input
				type="text"
				className={styles.multipleChoiceAnswerInput}
				{...register("answerFour")}
			/>
			<button type="submit">Create</button>
		</form>
	);
}

export default MultipleChoice;
