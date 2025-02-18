import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-light text-dark py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 className="fw-bold">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">About</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Blogs</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Enterprise</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Lejhro Recruiter</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="fw-bold">Support</h5>
            <ul className="list-unstyled"> 
              <li><a href="#" className="text-dark text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Terms of Use</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Privacy Statement</a></li>
            </ul>
          </div>
          <div className="col-md-3">
      <h5 className="fw-bold">Connect with us</h5>
      <div className="d-flex gap-3 my-2">
        <a href="#" className="text-dark fs-4">
          <FaTwitter className='social-icon'/>
        </a>
        <a href="#" className="text-dark fs-4">
          <FaFacebookF className='social-icon' />
        </a>
        <a href="#" className="text-dark fs-4">
          <FaLinkedinIn className='social-icon' />
        </a>
        <a href="#" className="text-dark fs-4">
          <FaYoutube className='social-icon' />
        </a>
      </div>
      <button className="btn btn-outline-dark mt-1 mb-4">Refer and Earn</button>
    </div>
          <hr className='border-3'/>
          <div className="col-md-3">
            <h5 className="fw-bold">Bootcamp</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Data Science Bootcamp</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Data Analyst Bootcamp</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Full Stack Development Bootcamp</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Digital Marketing Bootcamp</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="mb-0">© 2025 LEJHRO. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer