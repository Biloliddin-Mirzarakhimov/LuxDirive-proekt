import React, { useState } from 'react';

const Filter = ({ setFilters }) => {
  const [priceValue, setPriceValue] = useState(100);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'price') {
      setPriceValue(value);
    }
    
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="filter-container">
      <h2 className="filter-title">🔍 Найдите идеальный автомобиль</h2>
      <form className="filter-form">
        <div className="filter-group">
          <label className="filter-label">
            <span className="spec-icon">🚗</span>
            Тип автомобиля
          </label>
          <select name="type" onChange={handleFilterChange} className="filter-select">
            <option value="">Все типы</option>
            <option value="Sedan">Седан</option>
            <option value="SUV">Внедорожник</option>
            <option value="Economy">Эконом</option>
            <option value="Premium">Премиум</option>
            <option value="Electric">Электро</option>
            <option value="Sports">Спорткар</option>
            <option value="Van">Минивэн</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">
            <span className="spec-icon">⚡</span>
            Трансмиссия
          </label>
          <select name="transmission" onChange={handleFilterChange} className="filter-select">
            <option value="">Любая</option>
            <option value="Automatic">Автомат</option>
            <option value="Manual">Механика</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">
            <span className="spec-icon">⛽</span>
            Топливо
          </label>
          <select name="fuel" onChange={handleFilterChange} className="filter-select">
            <option value="">Любое</option>
            <option value="Gasoline">Бензин</option>
            <option value="Electric">Электричество</option>
            <option value="Diesel">Дизель</option>
            <option value="Hybrid">Гибрид</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">
            <span className="spec-icon">💰</span>
            Максимальная цена
          </label>
          <input
            type="range"
            name="price"
            min="0"
            max="150"
            defaultValue="100"
            onChange={handleFilterChange}
            className="filter-input"
          />
          <div className="price-value">${priceValue}/день</div>
        </div>
      </form>
    </div>
  );
};

export default Filter;