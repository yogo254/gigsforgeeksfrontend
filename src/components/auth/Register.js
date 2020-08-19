import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { setAlert } from "../../actions/Alert";
import uuid from "uuid/v4";

import PropTypes from "prop-types";
import { serverAddress } from "../../config/Config";

const Register = ({ setAlert }) => {
  let [formData, setFormData] = useState({
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    passward1: "",
    passward2: "",
    robot: "",
    agreement: false
  });
  let history = useHistory();
  const {
    username,
    email,
    passward1,
    passward2,
    lastname,
    firstname,

    agreement
  } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onChecked = e =>
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  const onSelected = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (passward1 !== passward2) setAlert("passwards don't match", "danger");
    else {
      let user = {};
      user.username = username;
      user.email = email;
      user.password = passward1;
      user.firstname = firstname;
      user.lastname = lastname;
      user.id = uuid();

      axios.post(`${serverAddress}/api/geek`, user).then(res => {
        history.push("/");
      });
    }
  };

  return (
    <div className="register">
      <div className="container">
        <h3 className="pink-text center">Create an Account </h3>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <p>Firstname:</p>
            <input
              className="form-control"
              type="text"
              placeholder="Firstname"
              name="firstname"
              value={firstname}
              onChange={e => onChange(e)}
              required
            />
          </div>
        </form>

        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <p>Lastname:</p>
            <input
              className="form-control"
              type="text"
              placeholder="Lastname"
              name="lastname"
              value={lastname}
              onChange={e => onChange(e)}
              required
            />
          </div>
        </form>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <p>Username:</p>
            <input
              className="form-control"
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <p>Email:</p>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>

          <div className="form-group">
            <p>Password:</p>
            <input
              type="password"
              className="form-control"
              id="c-pwd"
              name="passward1"
              placeholder="Passward"
              value={passward1}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <p>Confirm Password:</p>
            <input
              type="password"
              className="form-control"
              id="cc-pwd"
              name="passward2"
              value={passward2}
              placeholder="Confirm passward"
              onChange={e => onChange(e)}
              required
            />
          </div>

          <div>
            <p>
              <label>
                <input
                  type="checkbox"
                  required
                  value={agreement}
                  name="agreement"
                  onChange={e => onChecked(e)}
                />
                <span>
                  {" "}
                  I agree to the{" "}
                  <Link to="/terms">Company Terms and conditions</Link>
                </span>
              </label>
            </p>
          </div>

          <button type="submit" className=" btn pink white-text">
            Create new Account
          </button>
          <br />
          <br />
          <p className="black-text">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </form>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(Register);
