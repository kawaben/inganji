import React from "react";
import "./styles/help.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HelpButton = () => {
  
    return (
        <a
        href="https://wa.me/+250795458850" 
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      );
}

export default HelpButton;
