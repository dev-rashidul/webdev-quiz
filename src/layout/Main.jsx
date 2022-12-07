import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/Header/Header";

export const QuizCategoryContext = createContext({});

const Main = () => {

    const quizeCategory = useLoaderData();

  return (
    <QuizCategoryContext.Provider value={quizeCategory}>
      <Header></Header>
      <Outlet></Outlet>
    </QuizCategoryContext.Provider>
  );
};

export default Main;
