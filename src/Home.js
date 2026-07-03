import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import myphoto from './myphoto.jpeg';
// import Contact from "./Contact";
// import About from "./About";

const Home = () => {
  const navigate = useNavigate();
  const [showResumeMenu, setShowResumeMenu] = useState(false);

  // const download = () => {
  //   const a = document.createElement("a");
  //   a.href = "/resume.pdf";
  //   a.download = "Tirth-Neerav-Shah-Resume.pdf";
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  // };

  return (
    <div className="container">
      <main className="main-section">
        <div className="intro">

  <div className="hero-header">

    <div className="name-section">
      <h1 className="letter-animation">
        {"Tirth Shah".split("").map((char, index) => (
          <span
            key={index}
            style={{
              animationDelay: `${index * 0.1}s`,
              display: char === " " ? "inline-block" : undefined
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      <h2 className="role typing">
        Software Developer | Frontend Developer | Data Analytics Enthusiast
      </h2>
    </div>
    <div className="social-icons">
  <a
    href="https://www.linkedin.com/in/tirth-shah-043778247"
    target="_blank"
    rel="noopener noreferrer"
    title="LinkedIn"
  >
    <i className="fab fa-linkedin"></i>
  </a>

  <a
    href="https://github.com/Tirth443"
    target="_blank"
    rel="noopener noreferrer"
    title="GitHub"
  >
    <i className="fab fa-github"></i>
  </a>

  <a
  href="mailto:tirthoffwork@gmail.com"
  title="Email"
>
  <i className="fas fa-envelope"></i>
</a>
</div>

    <div className="graphic">
      <img src={myphoto} alt="Developer Graphic" />
    </div>

  </div>

  <p className="description">    I’m a passionate Computer Science Engineer with a strong focus on modern web development.
          </p>
          <ul className="details-list">
            <li>Transforming ideas into impactful digital solutions through software development, data analytics, and machine learning.</li>
            <li>I build modern applications, interactive dashboards, and intelligent systems that combine clean design, strong engineering, and actionable insights.</li>
            <li>I enjoy transforming complex problems into simple, efficient, and user-focused solutions through clean code and analytical thinking.</li>
        
          </ul>
          
          <div className="buttons">
  <button onClick={() => navigate('/Contact')}>
    Contact Me
  </button>

  <div className="resume-dropdown">
    <button onClick={() => setShowResumeMenu(!showResumeMenu)}>
      Download Resume ▼
    </button>

    {showResumeMenu && (
      <div className="resume-menu">
        <a href="/resumes/Frontend_Developer_Resume.pdf" download>
          Frontend Developer
        </a>

        <a href="/resumes/Software_Developer_Resume.pdf" download>
          Software Developer
        </a>

        <a href="/resumes/Data_Analyst_Resume.pdf" download>
          Data Analyst
        </a>

        {/* <a href="/resumes/Business_Analyst_Resume.pdf" download>
          Business Analyst
        </a>

        <a href="/resumes/Full_Stack_Developer_Resume.pdf" download>
          Full Stack Developer
        </a> */}
      </div>
    )}
  </div>
</div>
        </div>
       
      </main>
    </div>
  );
};

export default Home;
