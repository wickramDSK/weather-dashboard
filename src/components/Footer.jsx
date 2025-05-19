import React from "react";
import "../styles/Footer.css";
import GitLogo from "../assets/github-logo.png";

function Footer() {
  return (
    <footer className="app-footer text-center py-3 mt-auto">
      <span>
        Weather Dashboard © {new Date().getFullYear()} - {" "}
         <img src={GitLogo} alt="GitHub Logo" className="github-logo" /> 
        <a
          href="https://github.com/wickramDSK"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          wickramDSK
        </a>
      </span>
    </footer>
  );
}

export default Footer;
