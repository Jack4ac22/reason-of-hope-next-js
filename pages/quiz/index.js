import React, { useState } from "react";

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
  const [selectedButton, setSelectedButton] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [showCheckAnswer, setShowCheckAnswer] = useState(false);
  const [deactivated, setDeactivated] = useState(false);

  const handleAnswerSelection = (answerId) => {
    setSelectedAnswer(answerId);
    setShowCheckAnswer(true);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      const currentQuestion = questions[currentQuestionIndex];
      const selectedAnswerObj = currentQuestion.answers.find(
        (answer) => answer.id === selectedAnswer
      );

      if (selectedAnswerObj.isCorrect) {
        setScore(score + 1);
      }
      setDeactivated(false);
      setSelectedAnswer(null);
      setShowAnswer(false);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowNext(false);
    }
  };

  const handleCheckAnswer = () => {
    setShowAnswer(true);
    setShowNext(true);
    setShowCheckAnswer(false);
    setDeactivated(true);
  };

  return (
    <div>
      <h1>Quiz</h1>
      {currentQuestionIndex < questions.length ? (
        <div>
          <div>{questions[currentQuestionIndex].category}</div>
          <div>{questions[currentQuestionIndex].question}</div>
          {questions[currentQuestionIndex].category === "True or false" && (
            <div>
              <button
                onClick={() =>
                  handleAnswerSelection(
                    questions[currentQuestionIndex].answers[0].id
                  )
                }
                className={`btn btn-outline-primary ${
                  selectedAnswer ===
                  questions[currentQuestionIndex].answers[0].id
                    ? "selected"
                    : ""
                } ${deactivated ? "disabled" : ""}`}
              >
                True
              </button>
              <button
                onClick={() =>
                  handleAnswerSelection(
                    questions[currentQuestionIndex].answers[1].id
                  )
                }
                className={`btn btn-outline-primary ${
                  selectedAnswer ===
                  questions[currentQuestionIndex].answers[1].id
                    ? "selected"
                    : ""
                }  ${deactivated ? "disabled" : ""}`}
              >
                False
              </button>
            </div>
          )}
          {questions[currentQuestionIndex].category === "Multiple choice" && (
            <div>
              {questions[currentQuestionIndex].answers.map((answer) => (
                <button
                  key={answer.id}
                  onClick={() => handleAnswerSelection(answer.id)}
                  className={`btn btn-outline-primary ${
                    selectedAnswer === answer.id ? "selected" : ""
                  }  ${deactivated ? "disabled" : ""}`}
                >
                  {answer.answer}
                </button>
              ))}
            </div>
          )}
          {showCheckAnswer && (
            <button onClick={handleCheckAnswer}>Check Answer</button>
          )}
          {showAnswer && (
            <>
              <div>
                Correct answer:{" "}
                {
                  questions[currentQuestionIndex].answers.find(
                    (answer) => answer.isCorrect
                  ).answer
                }
              </div>
              <div>
                your answer:{" "}
                {
                  questions[currentQuestionIndex].answers.find(
                    (answer) => answer.id === selectedAnswer
                  ).answer
                }
              </div>
            </>
          )}
          {showNext && (
            <>
              {currentQuestionIndex === questions.length - 1 ? (
                <button onClick={handleNextQuestion}>Get Your score</button>
              ) : (
                <button onClick={handleNextQuestion}>Next</button>
              )}
            </>
          )}
        </div>
      ) : (
        <div>
          <h2>Quiz completed!</h2>
          <p>Your score: {score}</p>
        </div>
      )}
    </div>
  );
}
//  TODO: after answering each question, show the answer and the bible reference.
//  TODO: first chose how many questions you want to play, ?? add timing for each question if needed.
//  TODO: add share my results to the last sceene.
//  TODO: add chose categories? or others.
//  TODO: full screen does not mark the chosen answer.