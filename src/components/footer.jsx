import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

import TitleMovies from "../components/TitleMovies";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/*✅ Social Media ✅*/}
        <div className="footer-social">
          <TitleMovies fontSize="18px" fontSizev="40px" />
          <img src="/images/footer1.png" width={140} height={140} alt="" />
          <div className="footer-icons" style={{ marginTop: "18px" }}>
            <Link to="#">
              <FaFacebook className="Icone" />
            </Link>
            <Link to="#">
              <FaTwitter className="Icone" />
            </Link>
            <Link to="#">
              <FaYoutube className="Icone" />
            </Link>
            <Link to="#">
              <FaInstagram className="Icone" />
            </Link>
          </div>
        </div>

        {/*✅ Important Links ✅*/}
        <div className="footer-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li>
              <Link className="footer-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/search">
                Search
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/*✅ Subscribe ✅*/}
        <div className="footer-subscribe" >
          <button
            style={{
              color: "white",
              backgroundColor: "var(--secondary-bg)",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            <input
              className="subscribe-input"
              placeholder="enter your email"
              type="email"
              name="email"
              id="email"
            />
            <span style={{ padding: " 0px 22px", textAlign: "center" }}>
              Subscribe
            </span>
          </button>

          <p className="subscribe-text">
            “Cinema is a matter of what's in the frame and what's out.” – Martin
            Scorsese
          </p>
        </div>
      </div>

      {/* ✅ Copy Right */}
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Movie World. All rights reserved.
        Design by Doaa Gamal
      </div>
    </div>
  );
};

export default Footer;
