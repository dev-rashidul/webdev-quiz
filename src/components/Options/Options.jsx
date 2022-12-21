import React from "react";

const Options = ({ options, optionHandler }) => {

  return (
    <label className="bg-cyan-400 hover:bg-cyan-300 duration-500 p-3 m-2 rounded-md shadow-md cursor-pointer">
      <input className="d-block" onClick={optionHandler} type="radio" value={options} name="option" /> {options}
    </label>
  );
};

export default Options;
