import React from "react";

const FooterSection = () => (
  <footer>
    <div className="footer-content">
      <p className="footer-text">© 2025 MindBloom. All Rights Reserved.</p>
      <div className="social-links">
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener" className="social-icon">
  <i className="fab fa-facebook" ></i>
</a>
<a href="https://www.twitter.com" target="_blank" rel="noreferrer noopener" className="social-icon">
  <i className="fab fa-twitter"></i>
</a>
<a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener" className="social-icon">
  <i className="fab fa-instagram" ></i>
</a>
<a href="https://www.linkedin.com" target="_blank" rel="noreferrer noopener" className="social-icon">
  <i className="fab fa-linkedin" ></i>
</a>

      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M0 20 C 20 40, 40 40, 60 20 C 80 0, 100 0, 100 20 L 100 100 L 0 100 Z" />
    </svg>
  </footer>
);

export default FooterSection;
