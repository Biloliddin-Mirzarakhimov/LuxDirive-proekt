import React from 'react';
import CarCard from './CarCard';

const CarList = ({ cars, onEdit, onDelete }) => {
  if (cars.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">🚗</div>
        <h3>Автомобили не найдены</h3>
        <p>Попробуйте изменить параметры фильтрации</p>
      </div>
    );
  }

  return (
    <div className="car-list-section">
      <h2 className="section-title">🚘 Доступные автомобили</h2>
      <div className="car-grid">
        {cars.map((car, index) => (
          <CarCard key={car.id} car={car} index={index} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default CarList;