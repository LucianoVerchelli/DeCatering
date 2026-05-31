import { FaLinkedin, FaInstagram } from 'react-icons/fa';

function SocialLinks() {
  return (
    <div style={{ display: 'flex', gap: '15px', fontSize: '24px' }}>
      {/* Icono de LinkedIn */}
      <a 
        href="https://linkedin.com/in/tu-usuario" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: '#0077B5', transition: 'transform 0.2s' }}
      >
        <FaLinkedin />
      </a>

      {/* Icono de Instagram */}
      <a 
        href="https://instagram.com/decatering.empresarial" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: '#E1306C', transition: 'transform 0.2s' }}
      >
        <FaInstagram />
      </a>
    </div>
  );
}

export default SocialLinks;