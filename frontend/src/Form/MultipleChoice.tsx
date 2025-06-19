import styles from "./MultipleChoice.module.css";

function MultipleChoice() {
	return (
		<form className={styles.multipleChoice}>
			<label className={styles.multipleChoiceQuestionLabel}>
				please enter a question:
				<input type="text" className={styles.multipleChoiceQuestionInput} />
			</label>
			<label className={styles.multipleChoiceAnswerLabel}>
				please enter answers:
			</label>
			<input type="text" className={styles.multipleChoiceAnswerInput} />
			<input type="text" className={styles.multipleChoiceAnswerInput} />
			<input type="text" className={styles.multipleChoiceAnswerInput} />
			<input type="text" className={styles.multipleChoiceAnswerInput} />
		</form>
	);
}

export default MultipleChoice;
