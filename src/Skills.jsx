import React from 'react';
import "./Skills.css";

function Skills() {
  return (
    <section id="skill">
    <div className="skills">
      <h1>MY SKILLS</h1>

      <div className="skills-grid">
        <div className="skill-card"><i className="bi bi-cup-hot"></i> Core Java</div>
        <div className="skill-card"><i className="bi bi-filetype-html"></i> HTML</div>
        <div className="skill-card"><i className="bi bi-filetype-css"></i> CSS</div>
        <div className="skill-card"><i className="bi bi-filetype-js"></i> JavaScript</div>
        <div className="skill-card"><i className="bi bi-lightning-charge-fill"></i> React.js</div>
        <div className="skill-card"><i className="bi bi-database-fill"></i> MySQL</div>
      </div>
    </div>
    </section>
  );
}

export default Skills;
