import React from "react";
import Login from "./components/auth/Login";

console.reportErrorsAsExceptions = false;

export default class App extends React.Component {
  render() {
    return <Login />;
  }
}
