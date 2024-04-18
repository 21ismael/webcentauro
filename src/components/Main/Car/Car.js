import React from 'react';
import './Car.css';
import fiat_tipo from '../../../assets/images/cars/fiat_tipo.webp'

export default function Car({ car, onClick }) {
    return <>
        <article key={car.id} className="col-sm-12 col-md-6 col-lg-4" onClick={onClick}>
            <div className='card hover'>
                <p><span className='car-brand-model'>{car.fleet.brand} {car.fleet.model}</span><br /><span>or similar</span></p>
                <img src={car.fleet.image} />
                <p><span className='daily-rate'>{car.fleet.dailyRate}€</span> / day</p>
            </div>
        </article>
    </>
}
