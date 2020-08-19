import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { serverAddress } from "../../config/Config";
import { setCurrentUser } from "../../actions/CurrentUser";

import { setAlert } from "../../actions/Alert";

const LogIn = ({ setCurrentUser, setForm, setAlert }) => {
  let history = useHistory();

  let [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const { username, password } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const login = e => {
    e.preventDefault();
    axios
      .post(`${serverAddress}/auth/login`, { username, password })
      .then(responce => {
        if (responce.status === 200 && responce.data.code !== 0) {
          let { accountDetails } = responce.data;
          setCurrentUser(accountDetails);
          if (accountDetails.type === "seller") history.push("/seller");
          else if (accountDetails.type === "admin") history.push("/admin");
          else history.push("/");
        } else setAlert(responce.data.message);
      })
      .catch(err => console.error(err));
  };
  return (
    <div
      className="container 
      login
    "
    >
      <h3 className="center pink-text">SIGN IN</h3>

      <form onSubmit={e => login(e)}>
        <div className="form-group">
          <label className="black-text">Username:</label>
          <input
            onChange={e => onChange(e)}
            type="text"
            name="username"
            value={username}
            required
          />

          <label className="black-text">Password:</label>
          <input
            onChange={e => onChange(e)}
            type="password"
            name="password"
            value={password}
            className="form-control"
            required
          />
        </div>
        <br />
        <br />
        <div className="center">
          <button type="submit" className="btn pink">
            SIGN IN
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { setCurrentUser, setAlert })(LogIn);
