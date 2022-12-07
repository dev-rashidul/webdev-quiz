import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const Quiz = () => {
  const quizData = useLoaderData();
  const quiz = quizData.data;

  const { name, questions } = quiz;

  return (
    <div className="Quiz">
      <div className="container mx-auto">
        <div className="quiz-wrapper w-full lg:w-2/3 mx-auto py-24">
          <div className="quiz bg-gray-900 p-5 shadow-md rounded-md">
            <h1 className="text-2xl md:text-3xl text-cyan-400 text-center font-semibold mb-10">Quiz Category : {name}</h1>
            <div className="questions">
              {questions.map((qs) => (
                <Questions key={qs.id} qs={qs}></Questions>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
