import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header";
import Body from "./components/Body";
import UseStateExp from "./components/UseStateExp";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <UseStateExp />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
