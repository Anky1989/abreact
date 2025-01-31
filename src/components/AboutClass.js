import React from "react";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 0,
      count2: 0,
    };
    console.log("child constructor");
  }

  componentDidMount() {
    console.log("child componentDidMount");
  }

  componentDidUpdate() {
    console.log("child componentDidUpdate ");
  }

  componentWillUnmount() {
    console.log("child componentWillUnmount ");
  }

  render() {
    console.log("child render");
    const { name, rollno } = this.props;
    return (
      <div className="about">
        <div className="about-card">
          <h2>Count: {this.state.count}</h2>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })} // always use setState to update the state
          >
            Increment
          </button>
          <h2>Name : {name}</h2>
          <h2>Roll No : {rollno}</h2>
          <h2>Course : B.Tech (IT)</h2>
          <h2>Branch : IT</h2>
          <h2>Year : 2nd</h2>
        </div>
      </div>
    );
  }
}

export default AboutClass;
