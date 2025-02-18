import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone } from "react-icons/fa";

const CallButton = () => {
  return (
    <a
      href="#"
      className="call-button d-flex align-items-center justify-content-center"
    >
      <FaPhone size={24} color="white" />
    </a>
  );
};

export default CallButton;
