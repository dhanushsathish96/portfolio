import React from 'react'
import Imgabout from "./assets/about.png"
import "./About.css"

function About() {
  return (
    <section id="about">
    <div className="about">
    <div className="imge">
         <img src={Imgabout}/>
    </div>
    
    <div className="text">
        <h1>ABOUT ME</h1>
        <p>Hi, I’m Dhanush S, a passionate Full Stack Developer and Frontend Developer. I enjoy building dynamic and responsive web applications with modern technologies like React.js, JavaScript, HTML, and CSS.</p> 
        <p>Alongside frontend, I also work with Java on the backend, which makes me confident in delivering complete end-to-end solutions.</p>
        <p>My career goal is to grow in the IT field, contribute to impactful projects, and become a well-rounded software professional.</p>
    </div>
    </div>
    </section>
  )
}

export default About