import React from 'react';

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        <li>
          <span className="skill-name"><strong>Frontend Development</strong></span>
          <p>
            Proficient in responsive web design techniques, ensuring that web applications are accessible and look great on various devices and screen sizes. As a frontend developer, I have a strong foundation in the following technologies:
          </p>
          <ul>
            <li className="frontend">
              <span>HTML</span>
              <p>
                Proficient in HTML (Hypertext Markup Language), the backbone of web development. Skilled in creating well-structured, semantic web pages.
              </p>
            </li>
            <li className="frontend">
              <span>CSS</span>
              <p>
                Proficient in CSS (Cascading Style Sheets), capable of designing visually appealing and responsive web interfaces. Familiar with modern CSS frameworks.
              </p>
            </li>
            <li className="frontend">
              <span>JavaScript</span>
              <p>
                Experienced in JavaScript, enabling me to create interactive web applications and enhance user experiences. Knowledge of ES6+ features and best practices.
              </p>
            </li>
            <li className="frontend">
              <span>React.js</span>
              <p>
                Skilled in React.js, a popular JavaScript library for building user interfaces. Capable of developing component-based applications and working with state management.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <span className="skill-name"><strong>Manual Testing</strong></span>
          <p>
            Skilled in manual testing techniques, capable of identifying and documenting software defects to ensure the quality and reliability of applications.
          </p>
        </li>
        <li>
          <span className="skill-name"><strong>Programming Skills</strong></span>
          <p>
            In addition to frontend development and manual testing, I have proficiency in the following areas:
          </p>
          <ul>
            <li className="programming">
              <span>Python</span>
              <p>
                Basic knowledge of Python programming, with the ability to write scripts and perform data analysis tasks.
              </p>
            </li>
            <li className="programming">
              <span>Java</span>
              <p>
                Familiarity with Java programming, including object-oriented concepts and application development.
              </p>
            </li>
            <li className="version-control">
            </li>
          </ul>
        </li>
        <li>
            <span className="skill-name"><strong>Version Control(Git)</strong></span>
            <p>
                Proficient in version control using Git, allowing for effective collaboration.
            </p>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
