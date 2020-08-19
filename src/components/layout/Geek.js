import React from "react";

const Geek = ({ geek }) => {
  return (
    <div className="card">
      <div className="card-image ">
        <img className=" responsive-img circle" src="/images/pic.jpg" />
      </div>
      <p className="card-title">{geek.username}</p>
      <div className="card-content">
        <p>Kata Count:</p>
        <p>Total score:</p>
      </div>
    </div>
  );
};

export default Geek;
