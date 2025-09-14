import React from 'react'
import  "./Project.css"

function Project() {
  return (
    <section className="Projectt" id="project">
    <div className = "heading">
        <h1>MY PROJECTS</h1>
    </div>


    <div className="ParentFlex">
        <div className="Project1">
        <h2>E-Commerce Website</h2>
        <p>A full-stack e-commerce website using React, Node.js, and MongoDB.</p>
        <a href="#">View Project</a>
        </div>

        <div className="Project2">
        <h2>E-Commerce Website</h2>
        <p>A full-stack e-commerce website using React, Node.js, and MongoDB.</p>
        <a href="#">View Project</a>
        </div>

        <div className="Project3">
        <h2>E-Commerce Website</h2>
        <p>A full-stack e-commerce website using React, Node.js, and MongoDB.</p>
        <a href="#">View Project</a>
        </div>

    </div>
    </section>  
  )
}

export default Project