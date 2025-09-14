import React from 'react'
import HeroImg from"./assets/hero.png"
import "./Home.css"

function Home() {
  return (
    <section className="parent" id="home">
    <div className="name">
      <h1>Hiii,<br/> I'm Dhanush!!
        <p>Software Developer</p>
      </h1>   

      <div className="icons">
        <a href="https://wa.me/9620504580" target="_blank" className="whatsapp">
          <i className="bi bi-whatsapp"></i>
        </a>

        <a href="//www.instagram.com/dhanush__sathish/" target="_blank" className="insta">
          <i className="bi bi-instagram"></i>
        </a>

        <a href="//www.linkedin.com/in/dhanush-sathish-92ba64325/" target="_blank" className="linkedin">
          <i className="bi bi-linkedin"></i>
        </a>

        <a href="https://github.com/dhanushsathish96" target="_blank" className="github">
          <i className="bi bi-github"></i>
        </a>
        </div> 
        <div className="but">
        <a href="/Dhanush Resume .pdf" download className="resume-btn">Download Resume</a>
    </div>
    </div>

    <div className='image'>
      <img  className="img"  src={HeroImg} height="500px" width="500px"/>
    </div>
     </section>
  )
}

export default Home;