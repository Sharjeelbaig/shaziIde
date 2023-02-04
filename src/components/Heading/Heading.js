import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./Heading.css";

function Heading() {
  return (
    <div className="heading-and-tagline">
      <div className="packaging">
        <p className="packaging-text">By Sharjeel Baig</p>
        <div className="social-icons">
          <a href="https://github.com/Sharjeelbaig"><FaGithub color="white" /></a>
          <a href="https://www.linkedin.com/in/sharjeel-baig-250858222/"><FaLinkedin color="white" /></a>
          <a href="https://www.facebook.com/sharjeel.baig.58/"><FaFacebook color="white" /></a>
        </div>
      </div>
      <h1 className="heading"><span style={{color:'#285e8e'}}>Shazi</span> <span style={{color:'#2c313a'}}>IDE</span></h1>
      <p className="tagline">With Javascript's might, the web doth shine bright, each line a step, to endless delight.</p>
    </div>
  );
}

export default Heading
