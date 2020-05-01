import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import "../public/styles/global.scss";
import routes from "./routes";

const App = (props) => (
  <Switch>
    {routes.map((route, i) => (
      <Route key={i} {...route} />
    ))}
  </Switch>
);

export default App;
