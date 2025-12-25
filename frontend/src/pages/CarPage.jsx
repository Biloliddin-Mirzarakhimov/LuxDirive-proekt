import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const CarPage = ({ cars }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return (
      <div className="car-detail-page">
        <div className="empty-state">
          <div className="empty-state-icon">❌</div>
          <h3>Автомобиль не найден</h3>
          <p>Возможно, он был удален или не существует</p>
          <Link to="/" className="view-button" style={{ marginTop: '2rem', display: 'inline-flex' }}>
            Вернуться к каталогу
          </Link>
        </div>
      </div>
    );
  }

  const handleRent = () => {
    alert(`🎉 Отлично! Вы выбрали ${car.name}.\n\n✅ Цена: $${car.price}/день\n💳 Депозит: $${car.conditions?.deposit || 0}\n🎯 Минимальный возраст: ${car.conditions?.minAge || 21} лет\n🪪 Стаж вождения: ${car.conditions?.license || '2 года'}\n\nВ реальном приложении здесь открылась бы форма бронирования с выбором дат и оформлением заказа.`);
  };

  return (
    <div className="car-detail-page">
      <button onClick={() => navigate(-1)} className="back-button">
        Назад к каталогу
      </button>
      
      <div className="car-detail-content">
        <div className="car-detail-image-container">
          <img src={car.image} alt={car.name} className="car-detail-image" />
        </div>
        
        <div className="car-detail-info">
          <h1>{car.name}</h1>
          <p className="car-detail-description">{car.description}</p>
          
          <div className="car-detail-specs">
            <div className="detail-spec-item">
              <span className="detail-spec-icon">🚗</span>
              <div className="detail-spec-content">
                <span className="detail-spec-label">Тип</span>
                <span className="detail-spec-value">{car.type}</span>
              </div>
            </div>
            
            <div className="detail-spec-item">
              <span className="detail-spec-icon">⚡</span>
              <div className="detail-spec-content">
                <span className="detail-spec-label">Трансмиссия</span>
                <span className="detail-spec-value">{car.transmission === 'Automatic' ? 'Автомат' : 'Механика'}</span>
              </div>
            </div>
            
            <div className="detail-spec-item">
              <span className="detail-spec-icon">👥</span>
              <div className="detail-spec-content">
                <span className="detail-spec-label">Количество мест</span>
                <span className="detail-spec-value">{car.seats} человек</span>
              </div>
            </div>
            
            <div className="detail-spec-item">
              <span className="detail-spec-icon">⛽</span>
              <div className="detail-spec-content">
                <span className="detail-spec-label">Топливо</span>
                <span className="detail-spec-value">
                  {car.fuel === 'Gasoline' ? 'Бензин' : car.fuel === 'Electric' ? 'Электро' : car.fuel === 'Diesel' ? 'Дизель' : car.fuel === 'Hybrid' ? 'Гибрид' : car.fuel}
                </span>
              </div>
            </div>
            
            <div className="detail-spec-item">
              <span className="detail-spec-icon">💰</span>
              <div className="detail-spec-content">
                <span className="detail-spec-label">Цена</span>
                <span className="detail-spec-value">${car.price}/день</span>
              </div>
            </div>
            
            <div className="detail-spec-item">
              <span className="detail-spec-icon">💳</span>
              <div className="detail-spec-content">
                <span className="detail-spec-label">Депозит</span>
                <span className="detail-spec-value">${car.conditions?.deposit || 0}</span>
              </div>
            </div>
          </div>
          
          <div className="rental-conditions">
            <h3>📋 Условия аренды</h3>
            <div className="conditions-list">
              <div className="condition-item">
                <span className="condition-icon">✓</span>
                <span>Минимальный возраст водителя: {car.conditions?.minAge || 21} лет</span>
              </div>
              <div className="condition-item">
                <span className="condition-icon">✓</span>
                <span>Стаж вождения: от {car.conditions?.license || '2 years'}</span>
              </div>
              <div className="condition-item">
                <span className="condition-icon">✓</span>
                <span>Необходим депозит: ${car.conditions?.deposit || 0}</span>
              </div>
              <div className="condition-item">
                <span className="condition-icon">✓</span>
                <span>Страховка включена в стоимость</span>
              </div>
              <div className="condition-item">
                <span className="condition-icon">✓</span>
                <span>Бесплатная отмена за 24 часа</span>
              </div>
            </div>
          </div>
          
          <button onClick={handleRent} className="rent-button">
            🚀 Арендовать сейчас
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarPage;