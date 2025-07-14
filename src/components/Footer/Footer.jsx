import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="py-5 mt-5">
      <div className="container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-auto">
            <div className="social-links d-flex gap-4">
              <a 
                href="https://www.instagram.com/alejandroliinares/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: 'white',
                  background: 'linear-gradient(135deg, #833AB4, #FD1D1D, #FCAF45)',
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a 
                href="https://www.amazon.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: 'white',
                  background: 'linear-gradient(135deg, #FF9900, #232F3E)',
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <i className="bi bi-cart"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center text-center">
          <div className="col-md-8">
            <p className="mb-3 text-white-50">&copy; 2025 Un Millón de Traumas. Todos los derechos reservados.</p>
            <p className="text-white-50 fst-italic" style={{ 
              fontSize: '0.9rem', 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Esta página no son lineas de codigo que salieron de mis manos, son destellos de un corazón que solo quiere cumplir sus sueños.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
