import React from "react";
import ReactDOM from "react-dom/client";


//const heading = React.createElement("h1",{id: "heading"},"namaste react");

const headingjsx=( 
<h1 className="head">
   Namaste React
    </h1>);
console.log(headingjsx);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headingjsx);                                   