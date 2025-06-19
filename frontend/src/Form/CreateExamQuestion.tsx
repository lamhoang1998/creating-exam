import style from "./CreateExamQuestion.module.css";

function CreateExamQuestion() {
	return (
		<div>
			<h2>Fill the form to create questions. choose one </h2>
			<form>
				<div className={style.createExamSwitch}>
					<span>Multiple choice</span>
					<span>Problem solving</span>
				</div>
			</form>
		</div>
	);
}

export default CreateExamQuestion;
