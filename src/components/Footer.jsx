import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <span>© {new Date().getFullYear()} Mi App React</span>
        <span className="footer-divider">|</span>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          GitHub
        </a>
        <span className="footer-divider">|</span>
        <a
          href="mailto:contacto@email.com"
          className="footer-link"
        >
          Contacto
        </a>
      </div>
    </footer>
  );
};

export default Footer;
