import React, { useState } from "react";
import './HireMe.css'
const HireMe = () => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    showModal && (
      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
         <button className="close-btn" onClick={handleClose} style={{ float: "right" }}>
            X
          </button>
        <div
          style={{
            background: "#fff",
            border: "1px solid #ccc",
            padding: "20px",
            width: "300px"
          }}
        >
          <h3 style={{ margin: "0 0 20px 0" }}>
            Empower Your Business with My Exceptional Skills
          </h3>
          <p>
            I am a dedicated and driven professional with a passion for delivering
            top-notch results. With my expertise in the field and my commitment to
            excellence, I am confident that I can add immense value to your organization.
            Let's work together to achieve greatness!
          </p>
          <a href="https://www.linkedin.com/in/sharjeel-baig-250858222/">          
<button className="hire-me-button">
<span>💼 Hire Me 💼</span>
</button>
</a>
        </div>
        
      </div>
    )
  );
};

export default HireMe;