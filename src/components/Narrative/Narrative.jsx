import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Narrative = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2>La Narrativa</h2>
          <p className="lead">Descubre la estructura y el estilo narrativo de "Un Millón de Traumas"</p>
        </div>
      </div>
      
      <div className="row mb-5">
        <div className="col-md-6">
          <h3>Estructura</h3>
          <p>
            "Un Millón de Traumas" se desarrolla a través de una estructura narrativa no lineal que entrelaza 
            diferentes líneas temporales y perspectivas. La novela está dividida en tres partes principales, 
            cada una explorando diferentes facetas de la historia y los personajes.
          </p>
          <p>
            Los capítulos alternan entre el presente y el pasado, revelando gradualmente los eventos que 
            llevaron a la situación actual y profundizando en las motivaciones de cada personaje.
          </p>
        </div>
        <div className="col-md-6">
          <div className="card h-100 bg-light">
            <div className="card-body">
              <h4 className="card-title">Partes de la novela</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-light">
                  <strong>Parte I: Orígenes</strong> - Establece el escenario y presenta a los personajes principales.
                </li>
                <li className="list-group-item bg-light">
                  <strong>Parte II: Confrontación</strong> - Desarrolla los conflictos centrales y las tensiones entre personajes.
                </li>
                <li className="list-group-item bg-light">
                  <strong>Parte III: Resolución</strong> - Culmina las diferentes líneas narrativas y ofrece un desenlace.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-12 mb-4">
          <h3>Estilo Literario</h3>
          <p>
            La novela combina prosa descriptiva con diálogos intensos y monólogos internos que revelan 
            la psicología de los personajes. El autor utiliza un lenguaje rico en metáforas y simbolismo, 
            creando capas de significado que invitan a múltiples lecturas.
          </p>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Temas Principales</h4>
              <ul>
                <li>La memoria y sus distorsiones</li>
                <li>El trauma y sus efectos en las relaciones</li>
                <li>La búsqueda de identidad</li>
                <li>La redención y el perdón</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Técnicas Narrativas</h4>
              <ul>
                <li>Narración no lineal</li>
                <li>Múltiples puntos de vista</li>
                <li>Flashbacks y anticipaciones</li>
                <li>Corriente de conciencia</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Influencias Literarias</h4>
              <ul>
                <li>Literatura psicológica</li>
                <li>Realismo mágico</li>
                <li>Novela contemporánea</li>
                <li>Narrativa experimental</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Narrative;
