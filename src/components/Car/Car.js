import React from 'react';
import './Car.css';

export default function Car({ car, onClick, selected }) {
    return <>
        <article key={car.id} className="col-12 col-md-6 col-xl-4" onClick={onClick}>
            <div className={`card ${selected}`}>
                <p><span className='car-brand-model'>{car.fleet.brand} {car.fleet.model}</span><br /><span>or similar</span></p>
                <img src={car.fleet.image} />
                <p><span className='daily-rate'>{car.fleet.dailyRate}€</span> / day</p>
            </div>
        </article>
    </>
}