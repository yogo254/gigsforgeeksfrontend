import React from "react";
import { useHistory } from "react-router-dom";
import { serverAddress } from "../../config/Config";
import { setGeeks } from "../../actions/Geek";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

const Navbar = ({ setGeeks }) => {
  let history = useHistory();
  return (
    <nav className=" pinned-nav ">
      <div class="nav-wrapper">
        <Link to="/" class="brand-logo center bold ">
          GIGS FOR GEEKS
        </Link>
        <ul class="left hide-on-med-and-down">
          <li>
            <button
              onClick={e => {
                axios.get(`${serverAddress}/api/geek/all`).then(res => {
                  setGeeks(res.data);
                });

                history.push("/geeks");
              }}
              className="btn red white-textm waves-effect waves-light nav-btn"
            >
              Geeks
            </button>
          </li>
          <li>
            <button className="btn pink white-textm waves-effect waves-light nav-btn">
              Kata
            </button>
          </li>
        </ul>
        <ul class=" right hide-on-med-and-down">
          <li>
            <button className="btn green white-textm waves-effect waves-light nav-btn">
              Gigs
            </button>
          </li>
          <li>
            <button className="btn brown white-textm waves-effect waves-light nav-btn">
              leaderboard
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default connect(null, { setGeeks })(Navbar);
