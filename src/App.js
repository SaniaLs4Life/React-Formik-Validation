import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginRegisterField from "./components/LoginRegisterField";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={LoginRegisterField} />
      </Router>
    );
  }
}

export default App;
