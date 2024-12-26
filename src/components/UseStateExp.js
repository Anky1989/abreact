import { useState } from "react";

const UseStateExp = () => {
  // form example
  const [name, setName] = useState("Ankit");
  const [age, setAge] = useState(25);

  function changeName(e) {
    setName(e.target.value);
  }

  function countAge() {
    setAge(age + 1);
  }

  return (
    <div>
      <h1>useState Example</h1>
      <h1>
        Name: {name}. age is {age}.
      </h1>
      <input type="text" value={name} onChange={changeName} />
      <button onClick={countAge}>Increment Age</button>
    </div>
  );

  /*
    //checkbox example
  const [checked, setChecked] = useState(false);

  function toggle() {
    setChecked((checked) => !checked);
  }

  return (
    <div>
      <h1>useState Example</h1>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? "liked" : "Not liked"}</p>
    </div>
  );
  */

  /*
    // text change
    const [text, setText] = useState("Hello World");

  function changeText(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h1>useState Example</h1>
      <h1>{text}</h1>
      <input type="text" value={text} onChange={changeText} />
      <button onClick={() => setText("Hello React")}>Change Text</button>
    </div>
  );
  */
  /*
// counter numner
const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>useState Example</h1>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );*/
};

export default UseStateExp;
