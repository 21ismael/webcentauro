import React from 'react';
import './RentInfo.css';
import shortDate from '../../../utils/shortDate';


export default function RentInfo({ selectedCar, pickupDate, returnDate }) {
    // Verifica si selectedCar existe
    if (!selectedCar || Object.keys(selectedCar).length === 0) {
        return null;
    }
    console.log(selectedCar)

    // Si selectedCar existe, renderiza la información del coche y las fechas
    return (
        <section className='container'>
            <div id='rent-info'>
                <div className='row'>
                    <div className='car-info col-12 col-md-8'>
                        <p><span className='car-brand-model'>{selectedCar?.fleet?.brand} {selectedCar?.fleet?.model}</span><br/> or similar</p>
                        <div className='car-image-dailyrate d-flex'>
                            <img src={selectedCar?.fleet?.image} alt='car' />
                            <p className='daily-rate'>{selectedCar?.fleet?.dailyRate}€<span className='day'> /day</span> </p>
                        </div>
                    </div>
                    <div className='date-office-info col-12 col-md-4'>
                        <p>{selectedCar?.office?.name}</p>
                        <p>From {shortDate(pickupDate)} to {shortDate(returnDate)}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

//<p>{JSON.stringify(selectedCar)}</p>