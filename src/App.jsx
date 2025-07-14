import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importar todos los componentes
import Home from './components/Home/Home';
import Characters from './components/Characters/Characters';
import Narrative from './components/Narrative/Narrative';
import Soundtrack from './components/Soundtrack/Soundtrack';
import BuyNovel from './components/BuyNovel/BuyNovel';
import Comments from './components/Comments/Comments';
import Footer from './components/Footer/Footer';

// Componente principal de la aplicación
const App = () => {
  const [activeComponent, setActiveComponent] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Efecto para escuchar el evento de navegación desde el Footer
  useEffect(() => {
    const handleNavigate = (event) => {
      const { section } = event.detail;
      setActiveComponent(section);
      // Hacer scroll al inicio de la página cuando se cambia de sección
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    // Agregar el event listener
    document.addEventListener('navigate', handleNavigate);
    
    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      document.removeEventListener('navigate', handleNavigate);
    };
  }, []);

  // Función para renderizar el componente activo
  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Home />
      case 'characters':
        return <Characters />
      case 'narrative':
        return <Narrative />
      case 'soundtrack':
        return <Soundtrack />
      case 'buy':
        return <BuyNovel />
      case 'comments':
        return <Comments />
      default:
        return <Home />
    }
  }

  return (
    <div className="app-container">
      {/* Contenido principal */}
      <main>
        {renderComponent()}
      </main>
      
      {/* Menú de navegación flotante */}
      <div className="position-fixed bottom-0 start-0 end-0 py-3" style={{ zIndex: 1000 }}>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="nav-pills-container px-3 py-2" style={{ 
              borderRadius: '4px',
              background: '#fff',
              border: '1px solid #ddd'
            }}>
              <ul className="nav nav-pills">
                {[
                  { id: 'home', name: 'Inicio', icon: 'bi-house' },
                  { id: 'characters', name: 'Personajes', icon: 'bi-people' },
                  { id: 'narrative', name: 'Narrativa', icon: 'bi-book' },
                  { id: 'soundtrack', name: 'Soundtrack', icon: 'bi-music-note-beamed' },
                  { id: 'buy', name: 'Comprar', icon: 'bi-bag' },
                  { id: 'comments', name: 'Comentarios', icon: 'bi-chat-dots' }
                ].map((item) => (
                  <li className="nav-item" key={item.id}>
                    <a 
                      className={`nav-link px-3 py-2 ${activeComponent === item.id ? 'active' : ''}`} 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveComponent(item.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      style={{
                        color: activeComponent === item.id ? '#fff' : '#333',
                        borderRadius: '4px',
                        background: activeComponent === item.id ? '#333' : 'transparent',
                      }}
                    >
                      <i className={`bi ${item.icon}`}></i>
                      <span className="d-none d-md-inline ms-2">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default App;