import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import "../styles/Navbar.css";

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://linkedin.com/in/tu-usuario"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn de DeCatering"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://instagram.com/decatering.empresarial"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram de DeCatering"
      >
        <FaInstagram />
      </a>
    </div>
  );
}

export default SocialLinks;