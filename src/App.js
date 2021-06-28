import React from "react";
import "./App.css";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Sidebar from "./Sidebar";
import Feedback from "./Feedback";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router";
function App() {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/content1">
            <Content1 />
          </Route>
          <Route exact path="/" render={() => <Redirect to="/content1" />} />
          <Route path="/content2">
            <Content2 />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
