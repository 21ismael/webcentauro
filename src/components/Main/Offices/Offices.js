import React from 'react';
import './Offices.css';

export default function Offices() {
    return <>
        <section className='section-offices container'>
            <h2>Visit the most popular destinations with your car hire</h2>
            <p>At Centauro Rent a Car we have offices in the most popular tourist destinations in Spain, Portugal, Italia & Greece.</p>
            <p>Enjoy a holiday or short break by visiting the country’s most important cities with your car hire.</p>
            <div className='row cards d-flex justify-content-center'>
                <div className='card-container col-12 col-md-6 col-lg-3'>
                    <div className='card spain-card'>
                        <p className='card-text'>Car hire in<span className='country'><br />Spain</span></p>
                    </div>
                </div>
                <div className='card-container col-12 col-md-6 col-lg-3'>
                    <div className='card portugal-card'>
                        <p className='card-text'>Car hire in<span className='country'><br />Portugal</span></p>
                    </div>
                </div>
                <div className='card-container col-12 col-md-6 col-lg-3'>
                    <div className='card italy-card'>
                        <p className='card-text'>Car hire in<span className='country'><br />Italy</span></p>
                    </div>
                </div>
                <div className='card-container col-12 col-md-6 col-lg-3'>
                    <div className='card greece-card'>
                        <p className='card-text'>Car hire in<span className='country'><br />Greece</span></p>
                    </div>
                </div>
            </div>
        </section>
    </>
}
