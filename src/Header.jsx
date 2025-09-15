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

  const handleLinkClick = () => setMenu(false); // close menu when link clicked

  return (
<div className="Parent">
  <div className="port">
    <div className="top-row">
      <a href="#home" className="logo">PORTFOLIO</a>
      <div className="menu-wrapper">
        <button className="hamburger" onClick={toggleMenu}>☰</button>
        <ul className={`lists ${menu ? "show" : ""}`}>
          <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
          <li><a href="#skill" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#project" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
  );
}

export default Header;



