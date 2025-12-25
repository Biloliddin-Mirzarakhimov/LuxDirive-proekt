import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AddCarPage from './pages/AddCarPage';
import CarPage from './pages/CarPage';
import HomePage from './pages/HomePage';
import { cars as initialCars } from './data';

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const storedCars = localStorage.getItem('carRentalCars');
    if (storedCars) {
      try {
        setCars(JSON.parse(storedCars));
      } catch (error) {
        setCars(initialCars);
        localStorage.setItem('carRentalCars', JSON.stringify(initialCars));
      }
    } else {
      setCars(initialCars);
      localStorage.setItem('carRentalCars', JSON.stringify(initialCars));
    }
  }, []);

  const addCar = (newCar) => {
    const carWithId = {
      ...newCar,
      id: cars.length > 0 ? Math.max(...cars.map(c => c.id)) + 1 : 1
    };
    const updatedCars = [...cars, carWithId];
    setCars(updatedCars);
    localStorage.setItem('carRentalCars', JSON.stringify(updatedCars));
    return carWithId;
  };

  const editCar = (editedCar) => {
    const updatedCars = cars.map(car => 
      car.id === editedCar.id ? editedCar : car
    );
    setCars(updatedCars);
    localStorage.setItem('carRentalCars', JSON.stringify(updatedCars));
  };

  const deleteCar = (carId) => {
    const updatedCars = cars.filter(car => car.id !== carId);
    setCars(updatedCars);
    localStorage.setItem('carRentalCars', JSON.stringify(updatedCars));
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage cars={cars} onEdit={editCar} onDelete={deleteCar} />} />
        <Route path="/cars/:id" element={<CarPage cars={cars} />} />
        <Route path="/add-car" element={<AddCarPage addCar={addCar} />} />
      </Routes>
    </>
  );
}

export default App;