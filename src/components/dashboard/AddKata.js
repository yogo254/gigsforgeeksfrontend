import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import axios from "axios";

import { serverAddress } from "../../config/Config";

const Register = () => {
  let [formData, setFormData] = useState({
    title: "",
    description: "",
    difficulty: "",
    hint: "",
    specification: "",
    points: "",
    rules: ""
  });
  let history = useHistory();
  const {
    title,
    description,
    difficulty,
    hint,
    specification,
    points,
    rules
  } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onChecked = e =>
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  const onSelected = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    let kata = {};
    kata.title = title;
    kata.description = description;
    kata.hint = hint;
    kata.difficulty = difficulty;
    kata.rules = rules.split(",");
    kata.points = points;

    axios.post(`${serverAddress}/api/kata`, kata).then(res => {
      history.push(`/kata`);
    });
  };

  return (
    <div className="register">
      <div className=" container">
        <h3 className="center pink-text">ADD KATA </h3>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <p>title:</p>
            <input
              className="form-control"
              type="text"
              placeholder="title"
              name="title"
              value={title}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <p>description:</p>
            <input
              type="text"
              className="form-control"
              placeholder="description"
              name="description"
              value={description}
              onChange={e => onChange(e)}
              required
            />
          </div>

          <div>
            <p>Select difficulty</p>
            <p>
              <label>
                <input
                  type="radio"
                  name="difficulty"
                  value="hard"
                  onChange={e => onSelected(e)}
                />
                <span>hard</span>
              </label>
            </p>

            <p>
              <label>
                <input
                  name="difficulty"
                  type="radio"
                  value="medium"
                  onChange={e => onSelected(e)}
                />
                <span>medium</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="difficulty"
                  type="radio"
                  value="easy"
                  onChange={e => onSelected(e)}
                />
                <span>easy</span>
              </label>
            </p>
          </div>

          <div className="form-group">
            <p>hint:</p>
            <input
              className="form-control"
              type="text"
              placeholder="hint"
              name="hint"
              value={hint}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <p>specification:</p>
            <input
              className="form-control"
              type="text"
              placeholder="specification"
              name="spacification"
              value={specification}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <p>Rules:</p>
            <input
              className="form-control"
              type="text"
              placeholder="enter a csv text format"
              name="rules"
              value={rules}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <p>Points:</p>
            <input
              className="form-control"
              type="number"
              placeholder="points"
              name="points"
              value={points}
              onChange={e => onChange(e)}
              required
            />
          </div>

          <button type="submit" className="btn btn-info">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
