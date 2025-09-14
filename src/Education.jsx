
import React from 'react';
import "./Education.css";

function Education() {
  return (
    <section id="education">
    <div className="education">
      <h1>EDUCATION</h1>

      <div className="edu">
        <h2>Bachelor of Engineering (B.E.)</h2>
        <p><strong>East West Institute of Technology, Bengaluru</strong></p>
        <p>2021 – 2025</p>
        <p>Specialization: Electronics & Communication Engineering</p>
      </div>

      <div className="edu">
        <h2>Pre-University (PUC)</h2>
        <p><strong>Vidya Sanskaar Pre-University College, Bengaluru</strong></p>
        <p>2019 – 2021</p>
        <p>Percentage: 87.3%</p>
      </div>

      <div className="edu">
        <h2>SSLC</h2>
        <p><strong>St. Yash Public School School, Bengaluru</strong></p>
        <p>2018 – 2019</p>
        <p>Percentage: 87.2%</p>
      </div>
    </div>
    </section>
  );
}

export default Education;
