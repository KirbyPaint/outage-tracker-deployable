import React from "react";
import Header from "./Header";
import EventControl from "./EventControl";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const AppStyle = {
    border: "2px solid black",
    borderRadius: "15px",
    backgroundColor: "aliceblue",
    boxShadow: "5px 10px #888888",
    margin: "10px",
    padding: "10px"
  }

  return (
    <>
      <div style={AppStyle}>
        <Router>
          <Header />
          <Switch>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/">
              <EventControl />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;