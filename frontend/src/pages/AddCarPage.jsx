import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCarPage = ({ addCar }) => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    type: 'Sedan',
    transmission: 'Automatic',
    seats: '5',
    fuel: 'Gasoline',
    image: '',
    description: '',
    minAge: '21',
    license: '2 years',
    deposit: '200',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация задержки отправки
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newCar = {
      name: formData.name,
      price: parseFloat(formData.price),
      type: formData.type,
      transmission: formData.transmission,
      seats: parseInt(formData.seats),
      fuel: formData.fuel,
      image: formData.image || 'https://via.placeholder.com/800x600?text=No+Image',
      description: formData.description,
      conditions: {
        minAge: parseInt(formData.minAge),
        license: formData.license,
        deposit: parseFloat(formData.deposit),
      },
    };

    addCar(newCar);
    setIsSubmitting(false);
    setShowSuccess(true);

    // Показываем сообщение успеха и перенаправляем
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/');
    }, 2000);
  };

  const handleReset = () => {
    if (window.confirm('Вы уверены, что хотите очистить форму?')) {
      setFormData({
        name: '',
        price: '',
        type: 'Sedan',
        transmission: 'Automatic',
        seats: '5',
        fuel: 'Gasoline',
        image: '',
        description: '',
        minAge: '21',
        license: '2 years',
        deposit: '200',
      });
    }
  };

  return (
    <div className="add-car-page">
      <div className="add-car-header">
        <h1 className="add-car-title">Добавить новый автомобиль</h1>
        <p className="add-car-subtitle">
          Заполните информацию о вашем автомобиле для аренды
        </p>
      </div>

      <div className="add-car-container">
        <form onSubmit={handleSubmit} className="add-car-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                <span className="spec-icon">🚗</span>
                Название автомобиля
                <span className="required">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Например: Toyota Camry 2024"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <span className="spec-icon">💰</span>
                Цена за день ($)
                <span className="required">*</span>
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="50"
                min="1"
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                <span className="spec-icon">🏷️</span>
                Тип автомобиля
                <span className="required">*</span>
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="Sedan">Седан</option>
                <option value="SUV">Внедорожник</option>
                <option value="Economy">Эконом</option>
                <option value="Premium">Премиум</option>
                <option value="Electric">Электро</option>
                <option value="Sports">Спорткар</option>
                <option value="Van">Минивэн</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                <span className="spec-icon">⚡</span>
                Трансмиссия
                <span className="required">*</span>
              </label>
              <select
                name="transmission"
                value={formData.transmission}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="Automatic">Автомат</option>
                <option value="Manual">Механика</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                <span className="spec-icon">👥</span>
                Количество мест
                <span className="required">*</span>
              </label>
              <select
                name="seats"
                value={formData.seats}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="2">2 места</option>
                <option value="4">4 места</option>
                <option value="5">5 мест</option>
                <option value="7">7 мест</option>
                <option value="8">8 мест</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                <span className="spec-icon">⛽</span>
                Тип топлива
                <span className="required">*</span>
              </label>
              <select
                name="fuel"
                value={formData.fuel}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="Gasoline">Бензин</option>
                <option value="Diesel">Дизель</option>
                <option value="Electric">Электричество</option>
                <option value="Hybrid">Гибрид</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              <span className="spec-icon">🖼️</span>
              URL изображения
              <span className="required">*</span>
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/car-image.jpg"
              required
              className="form-input"
            />
          </div>

          {formData.image && (
            <div className="image-preview-section">
              <img 
                src={formData.image} 
                alt="Preview" 
                className="image-preview"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x600?text=Invalid+Image+URL';
                }}
              />
            </div>
          )}

          {!formData.image && (
            <div className="no-preview">
              Предпросмотр изображения появится здесь
            </div>
          )}

          <div className="form-group">
            <label className="form-label">
              <span className="spec-icon">📝</span>
              Описание
              <span className="required">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Опишите особенности автомобиля, его состояние, преимущества..."
              required
              className="form-textarea"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                <span className="spec-icon">🎯</span>
                Минимальный возраст
                <span className="required">*</span>
              </label>
              <select
                name="minAge"
                value={formData.minAge}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="18">18 лет</option>
                <option value="21">21 год</option>
                <option value="23">23 года</option>
                <option value="25">25 лет</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                <span className="spec-icon">🪪</span>
                Стаж вождения
                <span className="required">*</span>
              </label>
              <select
                name="license"
                value={formData.license}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="1 year">1 год</option>
                <option value="2 years">2 года</option>
                <option value="3 years">3 года</option>
                <option value="5 years">5 лет</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                <span className="spec-icon">💳</span>
                Депозит ($)
                <span className="required">*</span>
              </label>
              <input
                type="number"
                name="deposit"
                value={formData.deposit}
                onChange={handleChange}
                placeholder="200"
                min="0"
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="loading-spinner"></span>
                  Добавление...
                </>
              ) : (
                <>
                  <span>✓</span>
                  Добавить автомобиль
                </>
              )}
            </button>
            <button type="button" onClick={handleReset} className="reset-button">
              <span>↺</span>
              Очистить форму
            </button>
          </div>
        </form>
      </div>

      {showSuccess && (
        <div className="success-message">
          <h3>🎉 Успешно!</h3>
          <p>Автомобиль добавлен в каталог</p>
        </div>
      )}
    </div>
  );
};

export default AddCarPage;