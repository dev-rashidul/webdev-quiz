import React, { useContext } from "react";
import { QuizCategoryContext } from "../../layout/Main";
import Hero from "../Hero/Hero";
import QuizCat from "../QuizCat/QuizCat";

const Home = () => {
  const quizeCategory = useContext(QuizCategoryContext);

  return (
    <div>
      {/* Hero Section HTML Start */}

      <Hero></Hero>

      {/* Hero Section HTML End */}

      {/* Quiz Section HTML Start */}

      <div className="quizes-category py-24 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="quizes-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {quizeCategory.data.map((quizCat) => (
              <QuizCat key={quizCat.id} quizCat={quizCat}></QuizCat>
            ))}
          </div>
        </div>
      </div>

      {/* Quiz Section HTML End */}
    </div>
  );
};

export default Home;
