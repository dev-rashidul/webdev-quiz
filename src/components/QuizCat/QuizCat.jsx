import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Link } from 'react-router-dom';

const Quiz = ({ quizCat }) => {

  const {id, name, logo, total } = quizCat;

  return (
    <div className="quiz-cat rounded-t-md ring-1 ring-cyan-100">
      <div className="bg-gray-700 rounded-t-lg">
        <img className="w-full" src={logo} alt="" />
      </div>
      <div className="">
        <div className="flex justify-between items-center p-4">
            <h4 className="text-2xl text-cyan-400 font-semibold">{name}</h4>
            <p className="text-lg font-medium"> Total Quiz : {total}</p>
        </div>
        <div className="button">
            <Link to={`/quizCat/${id}`} className="block w-full bg-cyan-400 text-lg text-white text-center font-medium py-2 rounded-b-md">Start Quiz <FontAwesomeIcon className='pl-2' icon={faArrowRightLong}></FontAwesomeIcon> </Link>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
