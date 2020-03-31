// import react
import React from "react";
import ReactDOM from "react-dom";
//create a react component
const App = () => {
  console.log("App loaded");
  const name = "prashant";
  return <div style={{ color: "red" }}> {name} abcd </div>;
};
//show this component on the browser
ReactDOM.render(<App />, document.querySelector("#root"));
/* const App = functions() {
    return <div> Rito is my manager </div>;
  }; */
