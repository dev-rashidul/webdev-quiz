import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Options from "../Options/Options";
import "./Questions.css";

const Questions = ({ qs }) => {
  const { question, options, correctAnswer } = qs;

  const optionHandler = (e) => {
    const value = e.currentTarget.value;

    if (value === correctAnswer) {
      toast.success(`Right Answer : ${value}`, { autoClose: 1000 });
    } else {
      toast.error(`Wrong Answer : ${value}`, { autoClose: 1000 });
    }
  };

  const [cAnswer, setCAnswer] = useState("");

  const correctAnswerHandler = () => {
    const rightAnswer = qs.correctAnswer;
    setCAnswer(rightAnswer);
  };

  return (
    <div className="my-5 p-5 rounded-md">
      <div className="flex justify-between items-start">
        <h1 className="text-xl md:text-2xl text-cyan-400 font-medium pb-5">
          {question.replace("<p>", '').replace("</p>", '')}
        </h1>
        <button onClick={correctAnswerHandler}>
          <FontAwesomeIcon
            className="text-cyan-400 pt-3 pl-5 cursor-pointer"
            icon={faEye}
          ></FontAwesomeIcon>
        </button>
      </div>
      <p className="text-xl text-green-600 text-center font-medium pb-5">
        {cAnswer}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:py-5">
        {options.map((op) => (
          <Options options={op} optionHandler={optionHandler}></Options>
        ))}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Questions;
