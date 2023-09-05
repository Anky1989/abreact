/*Note: we have added three diff exmaples to create elems 
* 
*
*/

// this is to create single element
// createElement three para 
/*const heading = React.createElement(
  "h1",
  { id: "heading" },
  "first react js code!!!"
);

console.log(heading); // creating object
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root); // attach root elem
root.render(heading); // convert react into html*/

// create nested elems

/*const parent = React.createElement("div", { id:"parent" }, // parent
    React.createElement("div", { id:"child" }, //parent > child
        React.createElement("h1", {}, "I am H1 tag!!")) // child > tag 
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

// create nested elems with siblings - we can use arrat of elems

/*const parent = React.createElement(
  "div",
  { id: "parent" }, // parent
  React.createElement(
    "div",
    { id: "child" }, //parent > child
    [
      React.createElement("h1", { id: "h1" }, "I am H1 tag!!"),
      React.createElement("h2", { id: "h2" }, "I am H2 tag!!"),
    ]
  ) // child > tag
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/

// nested elem with multi childs as array
// react elem is a objects at the end of the day
const parent = React.createElement(
  "div",
  { id: "parent" }, // parent
  [
    React.createElement(
      "div",
      { id: "child1" }, //parent > child
      [
        React.createElement("h1", { id: "h1" }, "I am H1 tag!!"),
        React.createElement("h2", { id: "h2" }, "I am H2 tag!!"),
      ]
    ), // child > tag
    React.createElement(
      "div",
      { id: "child2" }, //parent > child
      [
        React.createElement("h1", { id: "h1" }, "I am H1 tag!!"),
        React.createElement("h2", { id: "h2" }, "I am H2 tag!!"),
      ]
    ), // child > tag
  ]
);
console.log(parent);
// react object use reactDOm and createRoot will assing the a root assign react 
const root = ReactDOM.createRoot(document.getElementById("root"));
// render method put object on to page 
root.render(parent));

// its very complex like there JSX comes into picture to reduce and make our life easy