import React, { useState } from "react";
import "./QuizSingleQuestion.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizSingleQuestion = ({ question, index }) => {
  const { id, question: questionTitle, correctAnswer, options } = question;
  // console.log(id);
  const [ans, setAns] = useState(true);
  const seeAndHandler = (id) => {
    setAns(!ans);
  };

  const notify = (option) => {
    if (option === correctAnswer) {
      toast.success("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("🦄Not correct", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="questionsSection">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="quesTitle">
        <div className="left">
          {index + 1}.
          <div dangerouslySetInnerHTML={{ __html: questionTitle }} />
        </div>

        <button onClick={() => seeAndHandler(id)} className="checkAns">
          {ans ? "See Ans" : "Hide"}
        </button>
      </div>
      <div className="quesOption">
        {options.map((option, index) => (
          <div onClick={() => notify(option)} key={index} className="options">
            {" "}
            - {option}
          </div>
        ))}
      </div>
      <div className={ans ? "correct-ans d-none" : "correct-ans"}>
        <p>
          <b>Correct Answer: </b>
          {correctAnswer}
        </p>
      </div>
    </div>
  );
};

export default QuizSingleQuestion;
