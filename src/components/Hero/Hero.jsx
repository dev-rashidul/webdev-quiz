import React from "react";
import { Link } from "react-router-dom";
import hero from "../../image/hero-img.png";

const Hero = () => {
  return (
    <div>
      <div className="hero-secton pt-24 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="hero-wrapper md:flex items-center">
            <div className="w-full md:w-1/2 pr-0 md:pr-12">
              <div className="hero-content text-center md:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-cyan-400 font-bold">
                  Welcome to WebDev Quiz
                </h2>
                <p className="text-base text-gray-600 pt-5 pb-6">
                  Hi, this is WebDev Quiz. It's a quiz platform. By
                  perticipating these quizes you can judge your skill about Web
                  Development. So, let's get started. Good luck to you.
                </p>
                <Link
                  className="bg-cyan-400 text-white text-lg font-medium py-2.5 px-4 rounded-md"
                  to="/"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 pt-12 md:pt-0">
              <div className="hero-img">
                <img className="w-100" src={hero} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
