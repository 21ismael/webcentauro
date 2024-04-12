import React from 'react';
import './ShowCarsForm.css';
import search from '../../../assets/images/icons/search.svg';
import arrow from '../../../assets/images/icons/arrow.svg';

export default function ShowCarsForm() {
    return <>
        <section>
            <div className='booking-container'>
                <form className='form-container container d-flex flex-column'>
                    <p>Find exactly what you are looking for</p>
                    <div className='row form-content'>
                        <div className='select-office col-12 col-md-12 col-xl-5 d-flex flex-column flex-md-row gap-2'>
                            <div className='pickup-office d-flex flex-column'>
                                <label>Pick-up</label>
                                <div class="input-container">
                                    <img src={search} alt='search icon' />
                                    <input id='input-pickup' className="input-text" type='text' list="office-options" />
                                </div>
                                <datalist id="office-options">
                                    <option>Alicante Airport</option>
                                    <option>Barcelona Central Station</option>
                                    <option>Madrid Plaza Central</option>
                                    <option>Rome Airport Fiumicino</option>
                                </datalist>
                            </div>
                            <div class='return-office d-flex flex-column'>
                                <label>Return</label>
                                <div class="input-container">
                                    <img src={arrow} alt='return arrow icon' />
                                    <input id="input-return" className="input-text" type='text' list="office-options" />
                                </div>
                            </div>
                        </div>
                        <div className='select-datetime d-flex col-12 col-md-8 col-xl-5 gap-3'>
                            <div className='pickup-date d-flex flex-column'>
                                <label>Pick-up date</label>
                                <div class="input-container">
                                    <input className="input-date" type='date' />
                                </div>
                            </div>
                            <div className='return-date d-flex flex-column'>
                                <label>Return date</label>
                                <div class="input-container">
                                    <input className="input-date" type='date' />
                                </div>
                            </div>
                        </div>
                        <div class="btn-cars-container col-12 col-md-4 col-xl-2">
                            <button className="btn-cars">Show cars</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </>
}


/*
<form class='form-container container d-flex flex-column'>
        <p>Find exactly what you are looking for</p>
        <div class='row form-content d-flex justify-content-between'>
            <div class='select-office col-12 col-xl-4 d-flex justify-content-between'>
                <div class='pickup-office d-flex flex-column'>
                    <label>Pick-up</label>
                    <input type='text' list="office-options" />
                </div>
                <div class='return-office d-flex flex-column'>
                    <label>Return</label>
                    <input type='text' list="office-options" />
                </div>
            </div>
            <div class='select-datetime col-12 col-md-8 col-xl-4 d-flex justify-content-between'>
                <div class='pickup-date d-flex flex-column'>
                    <label>Pick-up date</label>
                    <input type='date' class='date'></input>
                </div>
                <div class='return-date d-flex flex-column'>
                    <label>Return date</label>
                    <input type='date' class='date'></input>
                </div>
            </div>
            <button class="col-12 col-md-4 col-xl-4">Show cars</button>
        </div>
    </form>


*/