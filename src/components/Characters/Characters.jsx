import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Characters = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2>Personajes</h2>
          <p className="lead">Conoce a los protagonistas de "Un Millón de Traumas"</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Protagonista</h3>
              <h6 className="card-subtitle mb-2 text-muted">Personaje Principal</h6>
              <p className="card-text">
                Descripción del personaje principal, su historia, motivaciones y evolución a lo largo de la narrativa.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Antagonista</h3>
              <h6 className="card-subtitle mb-2 text-muted">Adversario</h6>
              <p className="card-text">
                Descripción del antagonista, sus objetivos y el conflicto que genera con el protagonista.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Personaje Secundario</h3>
              <h6 className="card-subtitle mb-2 text-muted">Apoyo</h6>
              <p className="card-text">
                Descripción de un personaje secundario importante y su relación con los demás personajes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
