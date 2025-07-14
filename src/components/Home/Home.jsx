import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const bookCoverRef = useRef(null);
  const heroTextRef = useRef(null);

  // Efecto para animar la portada del libro - transición simple
  useEffect(() => {
    const bookCover = bookCoverRef.current;
    const heroText = heroTextRef.current;
    
    if (bookCover && heroText) {
      // Animación inicial
      setTimeout(() => {
        bookCover.style.opacity = '1';
        bookCover.style.transform = 'translateY(0)';
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
      }, 300);
    }
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section py-5 mb-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0" ref={heroTextRef} style={{ 
              opacity: 0, 
              transform: 'translateY(20px)',
              transition: 'opacity 1s ease-out, transform 1s ease-out'
            }}>
              <h1 className="display-2 fw-bold mb-4" style={{ letterSpacing: '-0.05em', color: 'var(--color-primary)' }}>
                Un Millón de <span>Traumas</span>
              </h1>
              <p className="lead fs-4 mb-4" style={{ color: 'var(--color-text-secondary)' }}>Una experiencia literaria que transformará tu percepción de la narrativa contemporánea</p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <button className="btn btn-dark btn-lg px-4 py-3">
                  <i className="bi bi-book me-2"></i> Leer extracto
                </button>
                <button className="btn btn-outline-dark btn-lg px-4 py-3">
                  <i className="bi bi-info-circle me-2"></i> Conocer más
                </button>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="book-cover-container position-relative">
                <div 
                  className="book-cover mx-auto" 
                  ref={bookCoverRef}
                  style={{
                    width: '80%',
                    maxWidth: '300px',
                    height: '450px',
                    background: '#ffffff',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transform: 'translateY(20px)',
                    opacity: 0,
                    transition: 'opacity 1s ease-out, transform 1s ease-out',
                    position: 'relative',
                    zIndex: 1,
                    padding: '20px'
                  }}
                >
                  <div style={{ 
                    position: 'relative', 
                    zIndex: 1,
                    textAlign: 'center',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '2.5rem',
                    marginBottom: '10px',
                    color: '#333'
                  }}>UN</div>
                  <div style={{ 
                    position: 'relative', 
                    zIndex: 1,
                    textAlign: 'center',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '3rem',
                    lineHeight: '1',
                    marginBottom: '5px',
                    color: '#333'
                  }}>MILLÓN</div>
                  <div style={{ 
                    position: 'relative', 
                    zIndex: 1,
                    textAlign: 'center',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '2rem',
                    marginBottom: '5px',
                    color: '#333'
                  }}>DE</div>
                  <div style={{ 
                    position: 'relative', 
                    zIndex: 1,
                    textAlign: 'center',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '3.5rem',
                    lineHeight: '1',
                    color: '#333'
                  }}>TRAUMAS</div>
                  <div style={{ 
                    position: 'relative', 
                    zIndex: 1,
                    textAlign: 'center',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '1.5rem',
                    color: '#666',
                    marginTop: '20px'
                  }}>Parte I</div>
                  <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '0',
                    width: '100%',
                    textAlign: 'center',
                    fontSize: '0.8rem',
                    fontFamily: 'Arial, sans-serif',
                    color: '#666'
                  }}>
                    PRÓXIMAMENTE<br />
                    <span style={{ fontWeight: 'normal' }}>Alejandro Linares</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Espacio entre secciones */}
      <div className="container mb-5 py-4"></div>

      {/* Call to Action */}
      <div className="py-5 my-5" style={{
        background: '#f8f9fa',
        borderRadius: '10px',
        margin: '0 20px',
        border: '1px solid #eee'
      }}>
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-4" style={{ color: 'var(--color-primary)' }}>¿Listo para comenzar el viaje?</h2>
              <p className="lead mb-5" style={{ color: 'var(--color-text-secondary)' }}>Adquiere tu copia de "Un Millón de Traumas" y forma parte de esta experiencia literaria única.</p>
              <button className="btn btn-dark btn-lg px-5 py-3">
                <i className="bi bi-bag me-2"></i> Comprar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
