import React from "react";
import ReactDOM from "react-dom";
import Myfooter from "./Components/footer";
import Navbar from "./Components/navbar";
import Content from "./Components/content";
import "./style.css";
// Create element using DOM API
const newElement = (
  <div>
    <h1> Element </h1>
    <div> Element 2 </div>
  </div>
);
const h1 = document.createElement("h1");
h1.textContent = "My main content";
h1.className = "header";

console.log(h1);
// <h1 class = "header">My main content</h1>

// Create Element using JSX
const element = <h1 className="header"> My main content </h1>;
console.log(element);
// {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}

ReactDOM.render(
  <div>
    <Navbar /> <Content />
    <Myfooter />
  </div>,
  document.getElementById("root")
);

// ReactDOM.render(newElement, document.getElementById("rooot"))
