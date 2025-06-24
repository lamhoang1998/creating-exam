import {
	multipleChoiceDefaultValues,
	multipleChoiceSchema,
	type MultipleChoiceSchema,
} from "../zod/multipleChoiceSchema";
import styles from "./MultipleChoice.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function MultipleChoice() {
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
				please enter answers:
			</label>
			<input
				type="text"
				className={styles.multipleChoiceAnswerInput}
				{...register("answerOne")}
			/>
			{errors && (
				<span className={styles.multipleChoiceInputError}>
					{errors.answerOne?.message}
				</span>
			)}
			<input
				type="text"
				className={styles.multipleChoiceAnswerInput}
				{...register("answerTwo")}
			/>
			{errors && (
				<span className={styles.multipleChoiceInputError}>
					{errors.answerTwo?.message}
				</span>
			)}
			<input
				type="text"
				className={styles.multipleChoiceAnswerInput}
				{...register("answerThree")}
			/>
			{errors && (
				<span className={styles.multipleChoiceInputError}>
					{errors.answerThree?.message}
				</span>
			)}
			<input
				type="text"
				className={styles.multipleChoiceAnswerInput}
				{...register("answerFour")}
			/>
			{errors && (
				<span className={styles.multipleChoiceInputError}>
					{errors.answerFour?.message}
				</span>
			)}
			<button type="submit">Create</button>
		</form>
	);
}

export default MultipleChoice;
