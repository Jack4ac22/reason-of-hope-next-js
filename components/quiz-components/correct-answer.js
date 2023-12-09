export default function CorrectAnswer(props) {
  const question = props.question[0];
  console.log(question);
  const selectedAnswer = props.selectedAnswer;
  console.log("selectedAnswer: " + selectedAnswer);
  return (
    <div className="alert alert-success" role="alert">
      <h4 className="alert-heading">Well done!</h4>
      <p>The questions was:</p>
      <p>{`${question["category"]}: ${question["question"]}`}</p>
      <p>
        Your answer was:{" "}
        {
          question["answers"].filter(
            (answer) => answer["id"] === selectedAnswer
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
  );
}
