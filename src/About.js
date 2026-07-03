import React from "react";
// import "./About.css"; // Ensure this is created
// import myPhoto from "./assets/my-photo.jpg"; // Place your photo in src/assets/
import Navbar from "./Navbar";
import "./App.css";


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left: Intro + Education */}
        <div className="about-left fade-in delay-1">
          <h2 className="intro-heading">Hi, I'm Tirth!</h2>
          <p className="detail">
           <h3 style={{ color: "#ee5813" }}>
  Code. Analyze. Innovate.
</h3>
I turn ideas into software, data into insights, and challenges into opportunities.
          </p>

                    </div>
              <div className="education-section">
  <h2 className="heading">Education</h2>

  
  <h4 className="degree-title">
    Bachelor of Technology (B.Tech) in Computer Science (AI & ML)
  </h4>

  <p className="college-name">
    Godavari Institute of Engineering and Technology, Rajahmundry
  </p>

  <ul className="education-list">
    <li>📅 2022 – 2026</li>
    <li>📊 CGPA: 7.5/10</li>
  </ul>
</div>


      
        <div className="about-right fade-in delay-2">
        <div className="skills">
  <h2 className="heading">Skills:</h2>
  <div classname="skill-grid">


  <div className="skill-category fade-in delay-3">
    <h3 className="sub-heading">Frontend Development</h3>
    {/* <ul className="detail"> */}
      <li>React.js</li>
      <li>JavaScript</li>
      <li>HTML5 & CSS3</li>
      <li>BootStrap</li>
      <li>Responsive design</li>

    {/* </ul> */}
  </div>
  <div className="skill-category fade-in delay-3">
    <h3 className="sub-heading">Backend Development</h3>
    
      <li>JDBC</li>
      <li>Java</li>
      <li>Servlets</li>


    
  </div>
  <div className="skill-category fade-in delay-3">
    <h3 className="sub-heading">Data Analytics</h3>
    
      <li>Power BI</li>
      <li>Excel</li>
      <li>Data Visualization</li>
      <li>Data Cleaning</li>
      <li>Data Modeling</li>


    
  </div>
     <div className="skill-category fade-in delay-3">
    <h3 className="sub-heading">Database</h3>
    
      <li>MY SQL</li>
      <li>Oracle</li>

   
  </div>
   <div className="skill-category fade-in delay-3">
    <h3 className="sub-heading">Tools and Platforms</h3>
    
      <li>Firebase</li>
      <li>Git</li>
      <li>GitHub</li>
      <li>Chrome Dev Tools</li>
      <li>Visual Studio Code</li>

   
  </div>
  


  <div className="skill-category fade-in delay-3">
    <h3 className="sub-heading">Soft Skills</h3>
    
      <li>Strength Training</li>
      <li>Team Collaboration</li>
      <li>Communication</li>

      <h2 className="heading">Hobbies:</h2>
          <li>Cricket</li>
          <li>Gym</li>
          </div>
   
  </div>
</div>
          

          <div className="about-photo">
            {/* <img src={myPhoto} alt="Tirth Neerav Shah" /> */}
          </div>
        </div>
        
      </div>

    </section>
  );


};

export default About;
