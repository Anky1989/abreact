import { useState } from "react";

const About = (props) => {
  const { name } = props;
  const [count, setCount] = useState(0);
  return (
    <div className="about">
      <h1>About our Students</h1>
      <div className="about-card">
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <h2>Name : {name}</h2>
        <h2>Roll No : 2018IMT-019</h2>
        <h2>Course : B.Tech (IT)</h2>
        <h2>Branch : IT</h2>
        <h2>Year : 2nd</h2>
      </div>
    </div>
  );
};

export default About;
