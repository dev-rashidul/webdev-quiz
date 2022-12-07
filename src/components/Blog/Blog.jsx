import React from "react";

const Blog = () => {
  return (
    <div className="blog px-4 md:px-0 py-24">
      <div className="container mx-auto">
        <div className="blog-wrapper md:w-1/2 mx-auto bg-slate-50 p-5 rounded-md">
          <div className="blog-question">
            <h2 className="text-xl md:text-2xl text-cyan-400 font-semibold pb-4">
              Question - 1 : What is the purpose of react router?
            </h2>
            <p className="text-md">
              Answer : React router is a package library for routing in React.
              It is specially used for developing Single Page Web Applications.
              Using react router we can define multiple routes in a Application
              based on page also we can create dynamic link. We can create route
              using path and element.
            </p>
          </div>
          <div className="blog-question pt-10">
            <h2 className="text-xl md:text-2xl text-cyan-400 font-semibold pb-4">
              Question - 2 : How does Context API works?
            </h2>
            <p className="text-md">
              Answer : Context API used for share same data/information to any
              component. We use Context API for avoid prop drilling that means
              we don't need pass props to get data by using Context API we can
              access data from anywhere. By createContext react create a context
              and when use with context.Provider then Provider accepts a value
              and after that we can use this context using
              useContext(contextName).
            </p>
          </div>
          <div className="blog-question pt-10">
            <h2 className="text-xl md:text-2xl text-cyan-400 font-semibold pb-4">
              Question - 3 : What is useRef hook?
            </h2>
            <p className="text-md">
              Answer : useRef hook is a function that takes one argument
              (intialValue) and return an object.The returned object has a
              property called current whose value is the argument passed to
              useRef. If you invoke it without an argument, the returned
              object's current property is set to undefined. <br /> Some of the
              use cases of useRef hook are: <br />
              1. To access DOM elements. <br />
              2. To persist values in successive renders
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
