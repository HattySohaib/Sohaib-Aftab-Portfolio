import React from "react";
import "./Footer.css";

import useTheme from "../../contexts/theme.js";
import { RiArrowRightUpLine } from "@remixicon/react";
import { IradaContactForm } from "irada-widgets";

function Footer() {
  const { themeMode } = useTheme();
  return (
    <>
      <div id="footer" className={`footer-${themeMode}`}>
        <div className="contact">
          <IradaContactForm
            theme={themeMode}
            apiKey={
              "7ba93d45d89d6ccc6e0d0801412bae29f42121cfb4c884d9a4d1667619867ec6"
            }
            heading={"Wanna tell me how you feel about my site?"}
            subheading={"Or have an idea to share?"}
          />
        </div>
        <div className="social">
          <p className="social-header">Or, Connect with me via</p>
          <div className="social-links">
            <a
              className="social-link"
              href="https://www.linkedin.com/in/sohaibaftab/"
            >
              LinkedIn
              <RiArrowRightUpLine size={14} />
            </a>
            <a
              className="social-link"
              href="https://www.instagram.com/sohaibaftab.29/"
            >
              Instagram
              <RiArrowRightUpLine size={14} />
            </a>
            <a className="social-link" href="https://twitter.com/HattySohaib">
              Twitter X
              <RiArrowRightUpLine size={14} />
            </a>
            <a
              className="social-link"
              href="https://www.facebook.com/sohaib.5prime"
            >
              Facebook
              <RiArrowRightUpLine size={14} />
            </a>
            <a className="social-link" href="mailto:sohaibaftab29@gmail.com">
              Email
              <RiArrowRightUpLine size={14} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="Profiles">
            <p className="profiles-header">Profiles</p>
            <div className="profile-links">
              <a href="https://github.com/hattySohaib" className="profile-link">
                Github
                <RiArrowRightUpLine size={14} />
              </a>
              <a
                href="https://leetcode.com/HattySohaib/"
                className="profile-link"
              >
                LeetCode
                <RiArrowRightUpLine size={14} />
              </a>
              <a
                href="https://auth.geeksforgeeks.org/user/sohaib5prime/"
                className="profile-link"
              >
                Geeks for Geeks
                <RiArrowRightUpLine size={14} />
              </a>
            </div>
          </div>
          <div className="quicks">
            <p className="profiles-header">Navigation</p>
            <div className="quick-links">
              <a href="/" className="quick-link">
                Home
              </a>
              <a href="/about" className="quick-link">
                About
              </a>
              <a href="/blogs" className="quick-link">
                Blogs
              </a>
            </div>
          </div>
          <div className="quicks blogs">
            <p className="profiles-header">Blogs</p>
            <div className="quick-links">
              <a href="#" className="quick-link">
                Poetry
              </a>
              <a href="#" className="quick-link">
                Technical
              </a>
              <a href="#" className="quick-link">
                Others
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="copyright-text">Designed and Developed by Sohaib Aftab</p>
      </div>
    </>
  );
}

export default Footer;
