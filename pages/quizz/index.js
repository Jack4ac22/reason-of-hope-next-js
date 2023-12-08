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
  const [selectedAnswer, setSelectedAnswer] = useState(1);
  const [score, setScore] = useState(0);

  const [showNextQuestionButton, setShowNextQuestionButton] = useState(false);
  const [showCheckAnswerButton, setShowCheckAnswerButton] = useState(false);
  const [showResultsButton, setShowResultsButton] = useState(false);
  const [showAnswer, setShowAnswer] = useState(true);

  const [deactivateAnswers, setDeactivateAnswers] = useState(false);

  const [userAnswers, setUserAnswers] = useState([]);

  return (
    <>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="card border mb-3">
              {showResultsButton || (
                <>
                  <div className="card-header">{`Question ${
                    currentQuestionIndex + 1
                  } of ${questions.length}`}</div>
                  <div className="card-body">
                    {showAnswer && (
                      <>
                        <h5 className="card-title">{`${questions[currentQuestionIndex]["category"]}`}</h5>
                        <p className="card-text">
                          {`${questions[currentQuestionIndex]["question"]}`}
                        </p>
                        <ul className="list-group">
                          {questions[currentQuestionIndex]["answers"].map(
                            (answer) => (
                              <>
                                <button
                                  type="button"
                                  aria-current="true"
                                  className={`list-group-item list-group-item-action ${
                                    deactivateAnswers ? " disabled " : " "
                                  } ${
                                    selectedAnswer === answer.id
                                      ? " active "
                                      : ""
                                  }}`}
                                  key={answer.id}
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
                        <div className="alert alert-success" role="alert">
                          <h4 className="alert-heading">Well done!</h4>
                          <p>
                            Your answer is correct. Aww yeah, you successfully
                            read this
                          </p>
                          <hr />
                          <p className="mb-0">
                            The Bible verse is .... where you can find hinst
                            about this, the text is: "asdasdasd"
                          </p>
                        </div>
                        <div className="alert alert-danger" role="alert">
                          <h4 className="alert-heading">
                            Oh, Sorry Wrong Answer
                          </h4>
                          <p>
                            Your answer is wrong. Aww yeah, you successfully
                            read this
                          </p>
                          <hr />
                          <p className="mb-0">
                            The Bible verse is .... where you can find hinst
                            about this, the text is: "asdasdasd"
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="card-footer bg-transparent border">
                    {showNextQuestionButton && (
                      <button className="btn btn-primary mx-1">Next</button>
                    )}
                    {selectedAnswer && (
                      <button className="btn btn-primary mx-1">check</button>
                    )}
                    {showResultsButton && (
                      <button className="btn btn-primary mx-1">
                        get results
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
