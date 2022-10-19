import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizSingleQuestion from "../QUIZ_SINGLE_QUESTIONS/QuizSingleQuestion";
import "./QuizQ.css";

const QuizQ = () => {
  const quizQuestions = useLoaderData();
  const { logo, name, questions, total } = quizQuestions.data;
  // console.log(questions);

  return (
    <div className="container">
      <div className="questionsTopic">
        <div className="left">
          <img src={logo} alt="" />
        </div>
        <div className="right">
          <p>
            Topic: <b>{name}</b>
          </p>
          <p>
            Total Questions: <b>{total}</b>
          </p>
        </div>
      </div>

      <div className="questionsSection">
        {questions.map((question, index) => (
          <QuizSingleQuestion
            key={index}
            question={question}
            index={index}
          ></QuizSingleQuestion>
        ))}
      </div>
    </div>
  );
};

export default QuizQ;
