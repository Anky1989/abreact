const About = (props) => {
  const { name } = props;
  return (
    <div className="about">
      <h1>About our Students</h1>
      <div className="about-card">
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
