import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import CarList from '../components/CarList';

const HomePage = ({ cars: allCars, onEdit, onDelete }) => {
  const [cars, setCars] = useState(allCars);
  const [filters, setFilters] = useState({
    type: '',
    transmission: '',
    fuel: '',
    price: '100',
  });

  useEffect(() => {
    setCars(allCars);
  }, [allCars]);

  useEffect(() => {
    let filteredCars = [...allCars];

    if (filters.type) {
      filteredCars = filteredCars.filter((car) => car.type === filters.type);
    }

    if (filters.transmission) {
      filteredCars = filteredCars.filter((car) => car.transmission === filters.transmission);
    }

    if (filters.fuel) {
      filteredCars = filteredCars.filter((car) => car.fuel === filters.fuel);
    }

    if (filters.price) {
      filteredCars = filteredCars.filter(
        (car) => car.price <= parseInt(filters.price)
      );
    }

    setCars(filteredCars);
  }, [filters, allCars]);

  return (
    <div>
      <div className="hero-section">
        <h1 className="hero-title">Аренда премиальных автомобилей</h1>
        <p className="hero-subtitle">
          Выберите автомобиль своей мечты из нашего эксклюзивного каталога. 
          Лучшие цены, отличный сервис, незабываемые впечатления.
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">{allCars.length}+</span>
            <span className="stat-label">Автомобилей</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Поддержка</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5★</span>
            <span className="stat-label">Рейтинг</span>
          </div>
        </div>
      </div>
      
      <Filter setFilters={setFilters} />
      <CarList cars={cars} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
};

export default HomePage;