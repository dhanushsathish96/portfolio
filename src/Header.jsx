import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {  
    setMenu(!menu);
  }

useEffect(() => {
  window.scrollTo(0, 0);
  window.location.hash = "#home";
}, []);


  return (
    <div className="Parent">
      <div className="port">
        <a href="#home" className="logo">PORTFOLIO</a>
        <button className="hamburger" onClick={toggleMenu}>☰</button>
        <nav>
          <ul className={`lists ${menu ? "show" : ""}`}>
            <li><a href="#home" >Home</a></li>
            <li><a href="#about" >About</a></li>
            <li><a href="#education" >Education</a></li>
            <li><a href="#skill" >Skills</a></li>
            <li><a href="#project" >Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
