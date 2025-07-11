import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const bookCoverRef = useRef(null);
  const heroTextRef = useRef(null);

  // Efecto para animar la portada del libro
  useEffect(() => {
    const bookCover = bookCoverRef.current;
    const heroText = heroTextRef.current;
    
    if (bookCover && heroText) {
      // Animación inicial
      setTimeout(() => {
        bookCover.style.opacity = '1';
        bookCover.style.transform = 'translateY(0) rotate(3deg)';
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
      }, 300);
    }

    // Efecto de parallax en scroll
    const handleScroll = () => {
      if (bookCover) {
        const scrollValue = window.scrollY;
        bookCover.style.transform = `translateY(${scrollValue * 0.1}px) rotate(3deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section py-5 mb-5" style={{ overflow: 'hidden' }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0" ref={heroTextRef} style={{ 
              opacity: 0, 
              transform: 'translateY(20px)',
              transition: 'opacity 1s ease-out, transform 1s ease-out'
            }}>
              <h1 className="display-2 fw-bold mb-4" style={{ letterSpacing: '-0.05em' }}>
                Un Millón de <span style={{ 
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', 
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}>Traumas</span>
              </h1>
              <p className="lead fs-4 mb-4 text-white-50">Una experiencia literaria que transformará tu percepción de la narrativa contemporánea</p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <button className="btn btn-primary btn-lg px-4 py-3">
                  <i className="bi bi-book me-2"></i> Leer extracto
                </button>
                <button className="btn btn-outline-light btn-lg px-4 py-3 glass-effect">
                  <i className="bi bi-info-circle me-2"></i> Conocer más
                </button>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="book-cover-container position-relative">
                <div className="animated-element" style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, var(--color-accent) 0%, rgba(0,0,0,0) 70%)',
                  opacity: 0.6,
                  filter: 'blur(40px)',
                  zIndex: 0
                }}></div>
                <div 
                  className="book-cover mx-auto" 
                  ref={bookCoverRef}
                  style={{
                    width: '80%',
                    maxWidth: '300px',
                    height: '450px',
                    background: 'linear-gradient(135deg, var(--color-primary) 0%, #990000 100%)',
                    borderRadius: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                    transform: 'translateY(50px) rotate(3deg)',
                    opacity: 0,
                    transition: 'opacity 1s ease-out, transform 1s ease-out',
                    position: 'relative',
                    zIndex: 1,
                    padding: '20px'
                  }}
                >
                  <div style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #1a1a8f 0%, rgba(0,0,0,0) 70%)',
                    opacity: 0.7,
                    zIndex: 0
                  }}></div>
                  <div style={{ 
                    position: 'relative', 
                    zIndex: 1,
                    textAlign: 'center',
                    fontFamily: '"Brush Script MT", cursive',
                    fontSize: '2.5rem',
                    marginBottom: '10px'
                  }}>UN</div>
                  <div style={{ 
                    position: 'relative', 
                    zIndex: 1,
                    textAlign: 'center',
                    fontFamily: '"Brush Script MT", cursive',
                    fontSize: '3rem',
                    lineHeight: '1',
                    marginBottom: '5px'
                  }}>MILLÓN</div>
                  <div style={{ 
                    position: 'relative', 
                    zIndex: 1,
                    textAlign: 'center',
                    fontFamily: '"Brush Script MT", cursive',
                    fontSize: '2rem',
                    marginBottom: '5px'
                  }}>DE</div>
                  <div style={{ 
                    position: 'relative', 
                    zIndex: 1,
                    textAlign: 'center',
                    fontFamily: '"Brush Script MT", cursive',
                    fontSize: '3.5rem',
                    lineHeight: '1'
                  }}>TRAUMAS</div>
                  <div style={{ 
                    position: 'relative', 
                    zIndex: 1,
                    textAlign: 'center',
                    fontFamily: '"Brush Script MT", cursive',
                    fontSize: '1.5rem',
                    color: '#ffcc00',
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
                    opacity: 0.7
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

      {/* Features Section */}
      <div className="container mb-5 py-4">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold mb-3">Descubre la historia</h2>
            <div className="mx-auto" style={{ 
              width: '80px', 
              height: '4px', 
              background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
              borderRadius: '2px',
              marginBottom: '30px'
            }}></div>
          </div>
        </div>
        <div className="row g-4">
          {[
            {
              icon: 'bi-book',
              title: 'Narrativa Inmersiva',
              description: 'Sumérgete en una historia que desafía los límites entre realidad y ficción.'
            },
            {
              icon: 'bi-people',
              title: 'Personajes Complejos',
              description: 'Conoce personajes con profundidad psicológica que evolucionan a lo largo de la trama.'
            },
            {
              icon: 'bi-music-note-beamed',
              title: 'Experiencia Multimedia',
              description: 'Complementa tu lectura con la banda sonora especialmente compuesta para la novela.'
            }
          ].map((feature, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 glass-effect">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mb-4 mx-auto animated-element" style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    color: 'white',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                  }}>
                    <i className={`bi ${feature.icon}`}></i>
                  </div>
                  <h3 className="card-title h4 mb-3">{feature.title}</h3>
                  <p className="card-text text-white-50">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-5 my-5" style={{
        background: 'linear-gradient(135deg, rgba(25, 25, 112, 0.8), rgba(153, 0, 0, 0.8))',
        borderRadius: '20px',
        margin: '0 20px'
      }}>
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-4">¿Listo para comenzar el viaje?</h2>
              <p className="lead mb-5">Adquiere tu copia de "Un Millón de Traumas" y forma parte de esta experiencia literaria única.</p>
              <button className="btn btn-primary btn-lg px-5 py-3">
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
