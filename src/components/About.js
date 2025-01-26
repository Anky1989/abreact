import { useState } from "react";
import AboutClass from "./AboutClass";

const About = (props) => {
  const { name } = props;
  const [count, setCount] = useState(0);
  return (
    <div className="about">
      <h1>About our Students</h1>
      <AboutClass name="Pallavi Mandloi" rollno="12345" />
    </div>
  );
};

export default About;
