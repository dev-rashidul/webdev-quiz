import React from "react";
import { Link } from "react-router-dom";
import error from "../../image/error.jpg";

const Erorr = () => {
  return (
    <div className="error">
      <div className="img">
        <img className="w-1/3 mx-auto" src={error} alt="" />
      </div>
      <div className="home-btn text-center pt-5">
        <Link className="bg-cyan-400 text-lg text-white font-medium py-3 px-8 rounded-md" to='/'>Back To Home</Link>
      </div>
    </div>
  );
};

export default Erorr;
