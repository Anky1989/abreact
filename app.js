import React from "react";
import ReactDOM from "react-dom/client";


const title = (
<h1 className="head" tabIndex="5"> title page</h1>
);

let mypagename = "this is first react component page";
let pageId = 1000;

const HeadComp = () => (
  <div className="container">
    {title}
    <h2>{console.log("inside react component")}</h2>
  <h1 id="heading"> my first reach component {mypagename} and page ID {pageId}</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadComp/>);                                   