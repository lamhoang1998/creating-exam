import { useState } from "react";
import style from "./CreateExamQuestion.module.css";
import MultipleChoice from "./MultipleChoice";
import ProblemSolvingQuestion from "./ProblemSolvingQuestion";

function CreateExamQuestion() {
	const [multipleChoice, setMultipleChoice] = useState(true);
	const [problemSolving, setProblemSolving] = useState(false);

	function handleMultipleChoice() {
		if (!multipleChoice) {
			setMultipleChoice(true);
			setProblemSolving(false);
		}
	}

	function handleProblemSolving() {
		if (!problemSolving) {
			setProblemSolving(true);
			setMultipleChoice(false);
		}
	}

	return (
		<div className={style.createExam}>
			<h2>Fill the form to create questions. choose one </h2>
			<div className={style.createExamForm}>
				<div className={style.createExamSwitch}>
					<span onClick={handleMultipleChoice}>Multiple choice</span>
					<span onClick={handleProblemSolving}>Problem solving</span>
				</div>
				{multipleChoice && <MultipleChoice />}
				{problemSolving && <ProblemSolvingQuestion />}
			</div>
		</div>
	);
}

export default CreateExamQuestion;
