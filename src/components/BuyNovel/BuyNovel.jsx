import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BuyNovel = () => {
  const [selectedFormat, setSelectedFormat] = useState('ebook');
  const [quantity, setQuantity] = useState(1);

  const formats = [
    {
      id: 'ebook',
      name: 'eBook Digital',
      price: 9.99,
      description: 'Formato digital compatible con todos los dispositivos. Descarga inmediata.',
      icon: 'bi-tablet'
    },
    {
      id: 'paperback',
      name: 'Tapa Blanda',
      price: 19.99,
      description: 'Versión impresa en papel de alta calidad. Envío en 3-5 días hábiles.',
      icon: 'bi-book'
    },
    {
      id: 'hardcover',
      name: 'Edición Coleccionista',
      price: 29.99,
      description: 'Tapa dura con acabados premium y contenido exclusivo. Envío en 3-5 días hábiles.',
      icon: 'bi-journal-richtext'
    },
    {
      id: 'bundle',
      name: 'Pack Completo',
      price: 34.99,
      description: 'Incluye versión digital + tapa blanda con un 15% de descuento.',
      icon: 'bi-box'
    }
  ];

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= 10) {
      setQuantity(value);
    }
  };

  const getSelectedFormat = () => {
    return formats.find(format => format.id === selectedFormat);
  };

  const calculateTotal = () => {
    const format = getSelectedFormat();
    return (format.price * quantity).toFixed(2);
  };

  return (
    <div className="buy-novel-container py-5">
      <div className="container">
        {/* Header Section */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-5 fw-bold mb-3">Adquiere Tu Copia</h2>
            <p className="lead fs-4 text-muted">Descubre las diferentes opciones para obtener "Un Millón de Traumas"</p>
          </div>
        </div>

        <div className="row">
          {/* Book Preview Column */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="book-preview p-4 bg-light rounded-3 shadow-sm h-100">
              <div className="text-center mb-4">
                <div className="book-cover mx-auto" style={{
                  width: '80%',
                  maxWidth: '250px',
                  height: '350px',
                  backgroundColor: '#6c757d',
                  borderRadius: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                  transform: 'rotate(2deg)'
                }}>
                  Un Millón de Traumas
                </div>
              </div>
              <div className="book-details">
                <h4>Detalles del libro</h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="bi bi-person-fill me-2"></i> <strong>Autor:</strong> Autor Ficticio</li>
                  <li className="mb-2"><i className="bi bi-calendar-date me-2"></i> <strong>Publicación:</strong> 2025</li>
                  <li className="mb-2"><i className="bi bi-file-text me-2"></i> <strong>Páginas:</strong> 320</li>
                  <li className="mb-2"><i className="bi bi-translate me-2"></i> <strong>Idioma:</strong> Español</li>
                  <li className="mb-2"><i className="bi bi-star-fill me-2 text-warning"></i> <strong>Valoración:</strong> 4.8/5 (120 reseñas)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Purchase Options Column */}
          <div className="col-lg-7">
            <div className="card border-0 shadow">
              <div className="card-header bg-white py-3">
                <h3 className="mb-0">Opciones de compra</h3>
              </div>
              <div className="card-body">
                <div className="format-options mb-4">
                  <label className="form-label fw-bold">Selecciona el formato:</label>
                  <div className="row g-3">
                    {formats.map(format => (
                      <div className="col-md-6" key={format.id}>
                        <div 
                          className={`format-option card h-100 ${selectedFormat === format.id ? 'border-primary' : 'border-light'}`}
                          onClick={() => setSelectedFormat(format.id)}
                          style={{ cursor: 'pointer' }}
                        >
                          <div className="card-body d-flex align-items-center">
                            <div className="format-icon me-3">
                              <i className={`bi ${format.icon} fs-1 ${selectedFormat === format.id ? 'text-primary' : 'text-muted'}`}></i>
                            </div>
                            <div className="format-info">
                              <h5 className="card-title mb-1">{format.name}</h5>
                              <p className="card-text small mb-1">{format.description}</p>
                              <div className="price fw-bold text-primary">${format.price.toFixed(2)}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="quantity-selector mb-4">
                  <label htmlFor="quantity" className="form-label fw-bold">Cantidad:</label>
                  <div className="input-group" style={{ maxWidth: '150px' }}>
                    <button 
                      className="btn btn-outline-secondary" 
                      type="button"
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    >
                      <i className="bi bi-dash"></i>
                    </button>
                    <input 
                      type="number" 
                      className="form-control text-center" 
                      id="quantity" 
                      value={quantity}
                      onChange={handleQuantityChange}
                      min="1"
                      max="10"
                    />
                    <button 
                      className="btn btn-outline-secondary" 
                      type="button"
                      onClick={() => quantity < 10 && setQuantity(quantity + 1)}
                    >
                      <i className="bi bi-plus"></i>
                    </button>
                  </div>
                </div>

                <div className="order-summary p-3 bg-light rounded mb-4">
                  <h5>Resumen del pedido</h5>
                  <div className="d-flex justify-content-between mb-2">
                    <span>{getSelectedFormat().name} x {quantity}</span>
                    <span>${(getSelectedFormat().price * quantity).toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Envío</span>
                    <span>{selectedFormat === 'ebook' ? 'Gratis' : '$4.99'}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between fw-bold">
                    <span>Total</span>
                    <span>${selectedFormat === 'ebook' ? calculateTotal() : (parseFloat(calculateTotal()) + 4.99).toFixed(2)}</span>
                  </div>
                </div>

                <button className="btn btn-primary btn-lg w-100 d-flex align-items-center justify-content-center">
                  <i className="bi bi-cart-fill me-2"></i> Comprar ahora
                </button>

                <div className="payment-methods mt-3 text-center">
                  <small className="text-muted">Métodos de pago aceptados</small>
                  <div className="d-flex justify-content-center gap-3 mt-2">
                    <i className="bi bi-credit-card fs-4"></i>
                    <i className="bi bi-paypal fs-4"></i>
                    <i className="bi bi-cash fs-4"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="additional-info mt-4">
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-truck text-primary fs-3 me-2"></i>
                    <div>
                      <h6 className="mb-0">Envío rápido</h6>
                      <small className="text-muted">3-5 días hábiles</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-arrow-repeat text-primary fs-3 me-2"></i>
                    <div>
                      <h6 className="mb-0">Devolución gratuita</h6>
                      <small className="text-muted">30 días de garantía</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-shield-check text-primary fs-3 me-2"></i>
                    <div>
                      <h6 className="mb-0">Pago seguro</h6>
                      <small className="text-muted">Transacciones cifradas</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNovel;
