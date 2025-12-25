import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ car, index, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCar, setEditedCar] = useState(car);

  const handleSave = (e) => {
    e.preventDefault();
    onEdit(editedCar);
    setIsEditing(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm(`Удалить ${car.name}?`)) {
      onDelete(car.id);
    }
  };

  if (isEditing) {
    return (
      <div className="car-card car-card-editing" style={{ '--card-index': index }}>
        <form onSubmit={handleSave} className="edit-form">
          <input
            type="url"
            value={editedCar.image}
            onChange={(e) => setEditedCar({...editedCar, image: e.target.value})}
            placeholder="Image URL"
            required
          />
          <img src={editedCar.image} alt="Preview" style={{width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '10px', margin: '10px 0'}} />
          
          <input
            type="text"
            value={editedCar.name}
            onChange={(e) => setEditedCar({...editedCar, name: e.target.value})}
            placeholder="Name"
            required
          />
          
          <input
            type="number"
            value={editedCar.price}
            onChange={(e) => setEditedCar({...editedCar, price: parseFloat(e.target.value)})}
            placeholder="Price"
            required
          />
          
          <select value={editedCar.type} onChange={(e) => setEditedCar({...editedCar, type: e.target.value})}>
            <option value="Sedan">Седан</option>
            <option value="SUV">Внедорожник</option>
            <option value="Economy">Эконом</option>
            <option value="Premium">Премиум</option>
            <option value="Electric">Электро</option>
          </select>
          
          <button type="submit">✓ Сохранить</button>
          <button type="button" onClick={() => setIsEditing(false)}>✕ Отмена</button>
        </form>
      </div>
    );
  }

  return (
    <div className="car-card" style={{ '--card-index': index }}>
      <div className="car-image-container">
        <img src={car.image} alt={car.name} className="car-image" />
        <div className="car-badge">{car.type}</div>
        <div className="car-actions">
          <button onClick={() => setIsEditing(true)} className="edit-btn">✏️</button>
          <button onClick={handleDelete} className="delete-btn">🗑️</button>
        </div>
      </div>
      
      <div className="car-content">
        <h3 className="car-name">{car.name}</h3>
        <div className="car-specs">
          <div className="spec-item">
            <span className="spec-icon">⚡</span>
            <span>{car.transmission}</span>
          </div>
          <div className="spec-item">
            <span className="spec-icon">👥</span>
            <span>{car.seats} мест</span>
          </div>
          <div className="spec-item">
            <span className="spec-icon">⛽</span>
            <span>{car.fuel === 'Gasoline' ? 'Бензин' : car.fuel === 'Electric' ? 'Электро' : car.fuel}</span>
          </div>
          <div className="spec-item">
            <span className="spec-icon">🎯</span>
            <span>{car.conditions?.minAge || 21}+ лет</span>
          </div>
        </div>
        <div className="car-price-section">
          <div className="car-price">
            <div className="amount">${car.price}</div>
            <div className="car-price-label">в день</div>
          </div>
          <Link to={`/cars/${car.id}`} className="view-button">Подробнее</Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;