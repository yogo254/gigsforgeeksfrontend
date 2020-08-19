import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col m12 text-center">
              <h1 className="center red-text">Gigs For Geeks</h1>
              <p className=" flow-text white-text center">
                {" "}
                Do you have what it takes?
              </p>
              <p className="flow-text white-text center">
                {" "}
                How far are you willing to go?
              </p>
              <div className="center ">
                <Link to="/register" className=" btn pink white-text ">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light ">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
