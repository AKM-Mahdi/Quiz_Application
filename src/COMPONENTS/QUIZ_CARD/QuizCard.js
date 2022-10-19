import React from "react";
import "./QuizCard.css";
import { Link } from "react-router-dom";

const QuizCard = (props) => {
  const { id, name, logo, total } = props.data;

  return (
    <div className="quizCard">
      <img src={logo} alt="" />
      <h3>{name}</h3>
      <p>Total: ${total}</p>
      <button className="quizBtn">
        <Link to={`quiz/${id}`}>Start Test</Link>
      </button>
    </div>
  );
};

export default QuizCard;
