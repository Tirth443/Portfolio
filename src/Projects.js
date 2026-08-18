// src/Project.js
import React from "react";

const projects = [
  {
    title: "Smart Weed Detection",
    description:
      "Developed an AI-powered Smart Weed Detection system using computer vision and YOLOv8 to identify weeds from crop images in real time. The project involved image processing, object detection, model integration, and web application deployment, achieving approximately 92% detection accuracy. The system is designed to support automated crop monitoring and precision agriculture by helping identify weeds efficiently.",
    links: "https://ai-weed-detection.vercel.app",
  },

  {
    title: "Titanic Survival Prediction",
    description:
      "Developed a machine learning model using Python and Scikit-learn to predict passenger survival on the Titanic dataset through data preprocessing, feature engineering, and classification techniques.",
    link: "https://github.com/Tirth443/titanic-ml-project",
  },

  {
    title: "Recipes List using React JS",
    description:
      "Designed and developed a recipe listing website using React.js for practice in component-based architecture.",
    link: "https://github.com/your-username/weather-app",
    links: "https://recepies-e03fd.web.app",
  },

  {
    title: "HR Analytics Dashboard",
    description:
      "Developed an interactive Power BI dashboard to analyze employee attrition, workforce demographics, job satisfaction, and key HR metrics for data-driven decision-making.",
    link: "https://github.com/Tirth443/HR-Analytics-Dashboard",
  },

  {
    title: "Banking Account Simulator",
    description:
      "Built a Java-based banking application that simulates core banking operations such as account creation, deposits, withdrawals, balance inquiries, and transaction management using object-oriented programming principles.",
    link: "https://github.com/Tirth443/BankAccountStimulator",
  },

  {
    title: "Customer-Churn-Dashboard",
    description:
      "Built a Power BI dashboard to identify customer churn patterns, analyze retention trends, and uncover key factors influencing customer attrition.",
    link: "https://github.com/Tirth443/Customer-Churn-Dashboard",
  },

  {
    title: "Sign Up page",
    description:
      "Sign up page with google authentication using React JS.",
    link: "https://signup-1e29c.web.app/",
    links: "https://signup-1e29c.web.app/",
  },

  {
    title: "Todo list",
    description:
      "A simple to-do list app with CRUD features using React and localStorage.",
    link: "https://github.com/Tirth443/Tirth443/blob/main/todolist.html",
  },

  {
    title: "Form Validation using JavaScript",
    description:
      "Implemented client-side validation for forms using vanilla JavaScript.",
    link: "https://github.com/Tirth443/Tirth443/blob/main/formvalidation.html",
  },

  {
    title: "Random password generator",
    description:
      "Built a random password generator with customizable options.",
    link: "https://github.com/Tirth443/Tirth443/blob/main/randompass.html",
  },
];

const Project = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="project-list">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>

            {proj.link && (
              <>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>View on GitHub</button>
                </a>
                <br />
              </>
            )}

            {proj.links && (
              <a
                href={proj.links}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>View Live</button>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;