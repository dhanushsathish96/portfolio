// import { useState, useEffect } from "react";
// import "./Header.css";

// function Header() {
//   const [menu, setMenu] = useState(false);

//   const toggleMenu = () => {  
//     setMenu(!menu);
//   }

// useEffect(() => {
//   window.scrollTo(0, 0);
//   window.location.hash = "#home";
// }, []);

//   const handleLinkClick = () => setMenu(false); 

//   return (
// <div className="Parent">
//   <div className="port">
//     <div className="top-row">
//       <a href="#home" className="logo">PORTFOLIO</a>
//       <div className="menu-wrapper">
//         <button className="hamburger" onClick={toggleMenu}>☰</button>
//         <ul className={`lists ${menu ? "show" : ""}`}>
//           <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
//           <li><a href="#about" onClick={handleLinkClick}>About</a></li>
//           <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
//           <li><a href="#skill" onClick={handleLinkClick}>Skills</a></li>
//           <li><a href="#project" onClick={handleLinkClick}>Projects</a></li>
//           <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </div>
//   );
// }

// export default Header;




import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
  window.scrollTo(0, 0);
  window.location.hash = "#home";
}, []);

  // const handleLinkClick = () => setMenu(false);

  const handleLinkClick = (id) => {
  setMenu(false);        // close menu
  setActiveSection(id);  // set active immediately
};



  // Track scroll position to set active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% of section visible → active
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <div className="Parent">
      <div className="port">
        <div className="top-row">
          <a href="#home" className="logo">PORTFOLIO</a>
          <div className="menu-wrapper">
            <button className="hamburger" onClick={toggleMenu}>☰</button>
<ul className={`lists ${menu ? "show" : ""}`}>
  <li><a href="#home" onClick={() => handleLinkClick("home")} className={activeSection === "home" ? "active" : ""}>Home</a></li>
  <li><a href="#about" onClick={() => handleLinkClick("about")} className={activeSection === "about" ? "active" : ""}>About</a></li>
  <li><a href="#education" onClick={() => handleLinkClick("education")} className={activeSection === "education" ? "active" : ""}>Education</a></li>
  <li><a href="#skill" onClick={() => handleLinkClick("skill")} className={activeSection === "skill" ? "active" : ""}>Skills</a></li>
  <li><a href="#project" onClick={() => handleLinkClick("project")} className={activeSection === "project" ? "active" : ""}>Project</a></li>
  <li><a href="#contact" onClick={() => handleLinkClick("contact")} className={activeSection === "contact" ? "active" : ""}>Contact</a></li>
</ul>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
