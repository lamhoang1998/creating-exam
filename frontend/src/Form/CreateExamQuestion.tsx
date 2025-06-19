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
		<div>
			<h2>Fill the form to create questions. choose one </h2>
			<form>
				<div className={style.createExamSwitch}>
					<span onClick={handleMultipleChoice}>Multiple choice</span>
					<span onClick={handleProblemSolving}>Problem solving</span>
				</div>
				{multipleChoice && <MultipleChoice />}
				{problemSolving && <ProblemSolvingQuestion />}
			</form>
		</div>
	);
}

export default CreateExamQuestion;
