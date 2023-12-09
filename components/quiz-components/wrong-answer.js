export default function WrongAnswer(props) {
  const question = props.question[0];
  console.log(question);
  const selectedAnswer = props.selectedAnswer;
  console.log("selectedAnswer: " + selectedAnswer);
  return (
    <>
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Oh, Sorry Wrong Answer</h4>
        <p>The questions was {question["category"]}:</p>
        <p>{`${question["question"]}`}</p>
        <p>
          You answer was:{" "}
          {
            question["answers"].filter(
              (answer) => answer["id"] === selectedAnswer
            )[0]["answer"]
          }
        </p>
        <p>
          The correct answer is:{" "}
          {
            question["answers"].filter(
              (answer) => answer["isCorrect"] === true
            )[0]["answer"]
          }
        </p>
        <hr />
        <p className="mb-0">
          {`${question["verses"].map((verse) => verse["verse"])}: ${question[
            "verses"
          ].map((verse) => verse)}`}
        </p>
      </div>
    </>
  );
}
