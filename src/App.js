import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/main/Landing";
import Navbar from "./components/main/Navbar";

import "./App.css";
import LogIn from "./components/auth/Login";

import { Provider } from "react-redux";
import Alert from "./components/main/Alert";

import store from "./store";
import Register from "./components/auth/Register";
import Geeks from "./components/dashboard/Geeks";
import AddKata from "./components/dashboard/AddKata";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

function App() {
  let options = { hover: true, closeOnClick: true };
  M.Tabs.init(options);

  document.addEventListener("DOMContentLoaded", function() {
    let elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, options);
  });

  return (
    <Provider store={store.store}>
      <Router>
        <Fragment>
          <section className="white">
            <Navbar />
            <Alert />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/geeks" component={Geeks} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/addkata" component={AddKata} />
            </Switch>

            <Alert />
            <div className="container center ">
              <p className=" flow-text text-center footer-copyright">
                Copyright &copy; {new Date().getFullYear()} GigsForGeeks
              </p>
            </div>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
