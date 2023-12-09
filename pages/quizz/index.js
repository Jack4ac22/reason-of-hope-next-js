import React, { useState, useEffect } from "react";

export default function QuizPage() {
  const questions = [
    {
      id: 120,
      category: "True or false",
      question: "Timothy’s faith came through the witness of his father.",
      question_ar: "جاء إيمان تيموثاوس من خلال شهادة والده.",
      verses: ["2 Tim.1.5"],
      tags: ["EPISTLES", "general"],
      answers: [
        {
          id: 1,
          answer: "true",
          answer_ar: "صحيح",
          isCorrect: false,
        },
        {
          id: 2,
          answer: "False",
          answer_ar: "خاطئ",
          isCorrect: true,
        },
      ],
    },
    {
      id: 121,
      category: "Multiple choice",
      question: "What was the name of Timothy’s mother?",
      question_ar: "ما اسم أم تيموثاوس؟",
      verses: ["2Tim.1.5"],
      tags: ["EPISTLES", "general"],
      answers: [
        {
          id: 1,
          answer: "Lois",
          answer_ar: "لوئيس",
          isCorrect: false,
        },
        {
          id: 2,
          answer: "Eunice",
          answer_ar: "يونيقا",
          isCorrect: true,
        },
        {
          id: 3,
          answer: "Candice",
          answer_ar: "كانديس",
          isCorrect: false,
        },
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const [showNextQuestionButton, setShowNextQuestionButton] = useState(false);
  const [showResultsButton, setShowResultsButton] = useState(false);
  const [showAnswer, setShowAnswer] = useState(true);
  const [chosenAnswerResult, setChosenAnswerResult] = useState(null);
  const [quizResults, setQuizResults] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);

  /**
   * Handles the selection of an answer.
   * @param {string} answerId - The ID of the selected answer.
   */
  const handleAnswerSelection = (answerId) => {
    answerId === selectedAnswer
      ? setSelectedAnswer(null)
      : setSelectedAnswer(answerId);
  };

  /**
   * Handles the logic for checking the selected answer and updating the score and user answers.
   */
  const handleCheckAnswer = () => {
    if (
      questions[currentQuestionIndex]["answers"].find(
        (answer) => answer.id === selectedAnswer
      ).isCorrect === true
    ) {
      setScore(score + 1);
      setChosenAnswerResult(true);
    } else {
      setScore(score);
      setChosenAnswerResult(false);
    }

    setSelectedAnswer(null);
    setShowAnswer(false);

    currentQuestionIndex === questions.length - 1
      ? setShowResultsButton(true)
      : setShowNextQuestionButton(true);

    // add the question and the answer to the userAnswers array to display the results later.
    const currentQuestion = questions[currentQuestionIndex];
    currentQuestion["chosenAnswer"] = selectedAnswer;
    setUserAnswers([...userAnswers, currentQuestion]);
  };

  /**
   * Handles the action when the next question button is clicked.
   */
  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setShowAnswer(true);
    setShowNextQuestionButton(false);
    setChosenAnswerResult(null);
    setSelectedAnswer(null);
  };

  const handleShowResults = () => {
    setQuizResults(true);
  };

  return (
    <>
      {quizResults || (
        <>
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="card border mb-3">
                  {
                    <>
                      <div className="card-header">
                        {`Question ${currentQuestionIndex + 1} of ${
                          questions.length
                        } - your score is ${score} of ${
                          currentQuestionIndex + 1
                        } `}
                      </div>
                      <div className="card-body">
                        {showAnswer && (
                          <>
                            <h5 className="card-title">{`${questions[currentQuestionIndex]["category"]}`}</h5>
                            <p className="card-text">
                              {`${questions[currentQuestionIndex]["question"]}`}
                            </p>
                            {/* Answers mapping */}
                            <ul className="list-group">
                              {questions[currentQuestionIndex]["answers"].map(
                                (answer) => (
                                  <>
                                    <button
                                      type="button"
                                      aria-current="true"
                                      className={`list-group-item list-group-item-action ${
                                        selectedAnswer === answer.id
                                          ? " active "
                                          : ""
                                      }}`}
                                      key={answer.id}
                                      onClick={() =>
                                        handleAnswerSelection(answer.id)
                                      }
                                    >
                                      {answer.answer}
                                    </button>
                                  </>
                                )
                              )}
                            </ul>
                          </>
                        )}
                        {showAnswer || (
                          <>
                            {chosenAnswerResult && (
                              <div className="alert alert-success" role="alert">
                                <h4 className="alert-heading">Well done!</h4>
                                <p>
                                  Your answer is correct. Aww yeah, you
                                  successfully read this
                                </p>
                                <hr />
                                <p className="mb-0">
                                  The Bible verse is .... where you can find
                                  hinst about this, the text is: "asdasdasd"
                                </p>
                              </div>
                            )}
                            {chosenAnswerResult || (
                              <div className="alert alert-danger" role="alert">
                                <h4 className="alert-heading">
                                  Oh, Sorry Wrong Answer
                                </h4>
                                <p>
                                  Your answer is wrong. Aww yeah, you
                                  successfully read this
                                </p>
                                <hr />
                                <p className="mb-0">
                                  The Bible verse is .... where you can find
                                  hinst about this, the text is: "asdasdasd"
                                </p>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                      <div className="card-footer bg-transparent border">
                        {showNextQuestionButton && (
                          <button
                            className="btn btn-primary mx-1"
                            onClick={handleNextQuestion}
                          >
                            Next
                          </button>
                        )}
                        {selectedAnswer && (
                          <button
                            className="btn btn-primary mx-1"
                            onClick={handleCheckAnswer}
                          >
                            check
                          </button>
                        )}
                        {showResultsButton && (
                          <button
                            className="btn btn-primary mx-1"
                            onClick={handleShowResults}
                          >
                            get results
                          </button>
                        )}
                      </div>
                    </>
                  }
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {quizResults && (
        <>
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="card border mb-3">
                  <div className="card-header">
                    {`Results of ${questions.length} questions`}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Your score is {score}</h5>
                    <p className="card-text">
                      {userAnswers.map((answer) => (
                        <>
                          <div className="alert alert-primary" role="alert">
                            <h4 className="alert-heading">
                              {answer.question}{" "}
                              {answer.chosenAnswer ===
                              answer.answers.find((answer) => answer.isCorrect)
                                .id ? (
                                <span className="badge bg-success">
                                  Correct
                                </span>
                              ) : (
                                <span className="badge bg-danger">Wrong</span>
                              )}
                            </h4>
                            <p>
                              The correct answer is:{" "}
                              {
                                answer.answers.find(
                                  (answer) => answer.isCorrect
                                ).answer
                              }
                            </p>
                            <hr />
                            <p className="mb-0">
                              The Bible verse is .... where you can find hinst
                              about this, the text is: "asdasdasd"
                            </p>
                          </div>
                        </>
                      ))}
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border">
                    <button className="btn btn-primary mx-1">try again</button>
                    <button className="btn btn-primary mx-1">
                      new categories
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

//  work on the logic and the functions of the quiz. the basic colors and the layout is done. the display of the buttons and the logic of the quiz is not done yet.
