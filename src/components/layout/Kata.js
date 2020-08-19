import React from "react";

const Kata = ({ kata }) => {
  return (
    <div className="card">
      <div className="card-image ">
        <img className=" responsive-img circle" src="/images/pic.jpg" />
      </div>
      <p className="card-title">{kata.title}</p>
      <div className="card-content">
        <p>Kata Description:</p>
        <p>Points:</p>
      </div>
    </div>
  );
};

export default Kata;
