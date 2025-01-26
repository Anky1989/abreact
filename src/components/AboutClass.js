import React from "react";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about">
        <h1>About our Students</h1>
        <div className="about-card">
          <h2>Name : {this.props.name}</h2>
          <h2>Roll No : {this.props.rollno}</h2>
          <h2>Course : B.Tech (IT)</h2>
          <h2>Branch : IT</h2>
          <h2>Year : 2nd</h2>
        </div>
      </div>
    );
  }
}

export default AboutClass;
