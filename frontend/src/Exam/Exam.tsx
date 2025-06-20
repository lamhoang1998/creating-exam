import { useStore, type QuestionAndAnswer } from "../store/store";

function Exam() {
	const exams = useStore((state) => state.exam);

	return (
		<div>
			{exams && (
				<>
					{exams.map((exam) => (
						<fieldset key={exam.question}>
							<legend>{exam.question}:</legend>

							<div>
								<input
									type="radio"
									id={exam.answerOne}
									name={exam.question}
									value={exam.answerOne}
								/>
								<label htmlFor={exam.answerOne}>{exam.answerOne}</label>
							</div>

							<div>
								<input
									type="radio"
									id={exam.answerTwo}
									name={exam.question}
									value={exam.answerTwo}
								/>
								<label htmlFor={exam.answerTwo}>{exam.answerTwo}</label>
							</div>

							<div>
								<input
									type="radio"
									id={exam.answerThree}
									name={exam.question}
									value={exam.answerThree}
								/>
								<label htmlFor={exam.answerThree}>{exam.answerThree}</label>
							</div>

							<div>
								<input
									type="radio"
									id={exam.answerFour}
									name={exam.question}
									value={exam.answerFour}
								/>
								<label htmlFor={exam.answerFour}>{exam.answerFour}</label>
							</div>
						</fieldset>
					))}
				</>
			)}
		</div>
	);
}

export default Exam;
