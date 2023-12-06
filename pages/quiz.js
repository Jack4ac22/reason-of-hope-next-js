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
          answer: "False",
          answer: "خاطئ",
          isCorrect: true,
        },
        {
          id: 2,
          answer: "true",
          answer: "صحيح",
          isCorrect: false,
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
  console.log(currentQuestionIndex);
  console.log(selectedAnswer);
  console.log(score);
  const handleAnswerSelection = (answerId) => {
    setSelectedAnswer(answerId);
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

      setSelectedAnswer(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
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
                }`}
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
                }`}
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
                  }`}
                >
                  {answer.answer}
                </button>
              ))}
            </div>
          )}
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      ) : (
        <div>
          <h2>Quiz completed!</h2>
          <p>
            Your score: {score}/{questions.length}
          </p>
        </div>
      )}
    </div>
  );
}
//  TODO: after answering each question, show the answer and the bible reference.
//  TODO: first chose how many questions you want to play, ?? add timing for each question if needed.
//  TODO: add share my results to the last sceene.
//  TODO: add chose categories? or others.
