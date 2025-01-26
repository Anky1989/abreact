import React from "react";
import { useState } from "react";
import AboutClass from "./AboutClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }

  render() {
    console.log("parent render");
    const { name } = this.props;
    return (
      <div className="about">
        <h1>About our Students</h1>
        <AboutClass name="Pallavi Mandloi" rollno="12345" />
      </div>
    );
  }
}

export default About;
