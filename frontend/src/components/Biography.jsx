import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p> <h2>Biography </h2></p>
          <h3>Who We Are</h3>
          <p>
          A Hospital Management App built using the MERN (MongoDB, Express.js, React, Node.js) stack is designed to streamline hospital operations, enhance patient care, and improve administrative efficiency. This app integrates various hospital functions such as patient management, appointment scheduling, medical records, billing, and staff management into a unified platform, ensuring seamless communication and data sharing across different departments.
          </p>
          <p>We are working on a MERN STACK PROJECT.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
