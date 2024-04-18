import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import WebService from '../../services/WebService';
import Car from '../Main/Car/Car';
import './Rent.css';
import { click } from '@testing-library/user-event/dist/click';

export default function Rent() {

    const webService = new WebService();

    const location = useLocation();
    const formData = location.state && location.state.formData;

    const [data, setData] = useState({
        officeId: null,
        pickupDate: formData.pickupDate,
        returnDate: formData.returnDate
    });

    const [availableCars, setAvailableCars] = useState([]);

    useEffect(() => {
        if (formData && formData.pickupOffice) {
            webService.getOfficeByName(formData.pickupOffice)
                .then(office => {
                    setData(prevData => ({
                        ...prevData,
                        officeId: office.id
                    }));
                })
                .catch(error => {
                    console.error('Error fetching office:', error);
                });

        }
    }, [formData]);

    useEffect(() => {
        if (data.officeId && data.pickupDate && data.returnDate) {
            webService.getAvailableCars(data.officeId, data.pickupDate, data.returnDate)
                .then(response => {
                    setAvailableCars(response);
                })
                .catch(error => {
                    console.error('Error fetching available cars:', error);
                });
        }
    }, [data]);

    useEffect(() => {
        console.log(availableCars);
    }, [availableCars]);

    const handleCarClick = (car) => {
        console.log("Car clicked:\n", car);
    };

    return <>
        <section className='container'>
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
