import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Comments = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'Ana García',
      date: '10 de julio, 2025',
      content: 'Una historia fascinante que me mantuvo en vilo desde la primera página. Los personajes son increíblemente profundos.'
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      date: '8 de julio, 2025',
      content: 'La narrativa es única y la forma en que se entrelazan las historias es magistral. Definitivamente recomendado.'
    }
  ]);
  
  const [newComment, setNewComment] = useState({
    name: '',
    content: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment({
      ...newComment,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.name && newComment.content) {
      const date = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = date.toLocaleDateString('es-ES', options);
      
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          name: newComment.name,
          date: formattedDate,
          content: newComment.content
        }
      ]);
      
      setNewComment({
        name: '',
        content: ''
      });
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2>Comentarios</h2>
          <p className="lead">¿Qué opinan los lectores sobre "Un Millón de Traumas"?</p>
        </div>
      </div>
      
      <div className="row mb-5">
        <div className="col-md-8 mx-auto">
          {comments.map(comment => (
            <div key={comment.id} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{comment.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{comment.date}</h6>
                <p className="card-text">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Deja tu comentario</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nombre</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    value={newComment.name} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">Comentario</label>
                  <textarea 
                    className="form-control" 
                    id="content" 
                    name="content" 
                    rows="3" 
                    value={newComment.content} 
                    onChange={handleInputChange} 
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar comentario</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
