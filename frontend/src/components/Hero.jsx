import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          The XRAY Medical App is a state-of-the-art platform designed to streamline the procurement and management of medical supplies while offering a comprehensive website solution for hospitals. Built with the latest technologies, XRAY Medical App ensures efficient inventory management, seamless supply ordering, and robust online presence for healthcare institutions. This app facilitates the seamless operation of hospitals by integrating supply chain management with an intuitive website interface, enhancing both administrative efficiency and patient engagement.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
