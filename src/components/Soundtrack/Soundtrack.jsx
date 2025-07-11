import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Soundtrack = () => {
  const [tracks, setTracks] = useState([
    {
      id: 1,
      title: "Inicio del Viaje",
      artist: "Compositor Ficticio",
      duration: "3:45",
      description: "Tema principal que acompaña el comienzo de la historia, estableciendo el tono emocional de la novela.",
      chapter: "Capítulo 1"
    },
    {
      id: 2,
      title: "Recuerdos Perdidos",
      artist: "Artista Imaginario",
      duration: "4:12",
      description: "Melodía melancólica que representa los flashbacks del protagonista y su lucha con el pasado.",
      chapter: "Capítulo 3"
    },
    {
      id: 3,
      title: "Confrontación",
      artist: "Banda Inventada",
      duration: "5:08",
      description: "Pieza intensa que acompaña el clímax de la historia cuando los personajes enfrentan sus traumas.",
      chapter: "Capítulo 7"
    },
    {
      id: 4,
      title: "Resolución",
      artist: "Compositor Ficticio",
      duration: "4:30",
      description: "Tema que cierra la narrativa, ofreciendo un sentido de cierre y esperanza después del conflicto.",
      chapter: "Capítulo 10"
    }
  ]);

  const [currentTrack, setCurrentTrack] = useState(null);

  const playTrack = (id) => {
    setCurrentTrack(id === currentTrack ? null : id);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2>Soundtrack</h2>
          <p className="lead">La música que acompaña la experiencia de "Un Millón de Traumas"</p>
        </div>
      </div>
      
      <div className="row mb-4">
        <div className="col-12">
          <p>
            La banda sonora de "Un Millón de Traumas" ha sido cuidadosamente compuesta para complementar 
            la narrativa y profundizar la experiencia emocional del lector. Cada pieza musical corresponde 
            a momentos específicos de la historia, reflejando el estado mental de los personajes y la 
            atmósfera de las escenas clave.
          </p>
        </div>
      </div>
      
      <div className="row">
        <div className="col-12">
          <div className="list-group">
            {tracks.map(track => (
              <div 
                key={track.id} 
                className={`list-group-item list-group-item-action ${currentTrack === track.id ? 'active' : ''}`}
              >
                <div className="d-flex w-100 justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-1">{track.title}</h5>
                    <p className="mb-1">{track.artist} | {track.duration}</p>
                    <small>{track.chapter}</small>
                  </div>
                  <button 
                    className={`btn ${currentTrack === track.id ? 'btn-light' : 'btn-outline-primary'}`}
                    onClick={() => playTrack(track.id)}
                  >
                    {currentTrack === track.id ? 'Pausar' : 'Reproducir'}
                  </button>
                </div>
                <p className="mt-2 mb-0">{track.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Sobre el compositor</h4>
              <p className="card-text">
                La música de "Un Millón de Traumas" fue compuesta especialmente para acompañar la novela, 
                creando una experiencia inmersiva que combina literatura y sonido. El compositor se inspiró 
                en los temas de la obra para crear piezas que reflejan la complejidad emocional de la historia.
              </p>
              <p className="card-text">
                La banda sonora completa está disponible en plataformas de streaming y como descarga digital 
                con la compra de la edición especial de la novela.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soundtrack;
