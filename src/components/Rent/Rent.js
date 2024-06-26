import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import WebService from '../../services/WebService';
import Car from '../Car/Car';
import RentInfo from './RentInfo/RentInfo';
import './Rent.css';

export default function Rent() {

    const webService = new WebService();

    const location = useLocation();
    const reservation = location.state && location.state.reservation;

    const [availableCars, setAvailableCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState({});

    useEffect(() => {
        if (reservation && reservation.officeId && reservation.pickupDate && reservation.returnDate) {
            webService.getAvailableCars(reservation.officeId, reservation.pickupDate, reservation.returnDate)
                .then(response => {
                    setAvailableCars(response);
                })
                .catch(error => {
                    console.error('Error fetching available cars:', error);
                });
        }
    }, [reservation]);

    /*useEffect(() => {
        console.log(availableCars);
    }, [availableCars]);*/

    const handleCarClick = (car) => {
        setSelectedCar(car);
        console.log("Car clicked:\n", car);

        reservation.carId = car.id; 
        console.log(reservation);

        var rentInfo = document.getElementById('rent-info');
        if (rentInfo) {
            rentInfo.style.display = 'block';
            rentInfo.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        }
        
        window.scrollBy(0, -10000);
    };


    return <>
        <RentInfo selectedCar={selectedCar} reservation={reservation} />
        <section className='container cars'>
            <div className='question'>
                <p>WHICH CAR DO YOU WANT TO DRIVE?</p>
            </div>
            <div className="row cars-container">
                {availableCars && availableCars.map((car, index) => {
                    // Verifica si el coche actual tiene el mismo brand y model que algún coche anterior
                    const isDuplicateCar = availableCars
                        .slice(0, index) // Obtén todos los coches anteriores al actual
                        .some(previousCar => previousCar.fleet.brand === car.fleet.brand && previousCar.fleet.model === car.fleet.model);

                    // Renderiza el componente Car solo si no es un coche duplicado
                    return !isDuplicateCar && <Car key={car.id} car={car} onClick={() => handleCarClick(car)} />;
                })}
            </div>
        </section>
    </>
}



//