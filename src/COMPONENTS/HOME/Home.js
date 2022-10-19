import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../QUIZ_CARD/QuizCard";
import "./Home.css";

const Home = () => {
  const { data } = useLoaderData();

  return (
    <div className="container">
      <div className="quizContainer">
        {data.map((item) => (
          <QuizCard key={item.id} data={item}></QuizCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
