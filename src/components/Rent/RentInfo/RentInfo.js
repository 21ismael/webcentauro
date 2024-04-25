import React, { useState, useEffect } from 'react';
import shortDate from '../../../utils/shortDate';
import WebService from '../../../services/WebService';
import './RentInfo.css';
import calculatePrice from '../../../utils/calculatePrice';

export default function RentInfo({ selectedCar, reservation }) {

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        identityNumber: ''
    });

    useEffect(() => {
        console.log("Reservation updated from RentInfo.js:", reservation);
    }, [reservation]);


    // Verifica si selectedCar existe
    if (!selectedCar || Object.keys(selectedCar).length === 0) {
        return null;
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const webService = new WebService();

            const responseUser = await webService.addUser(formData);
            console.log(responseUser);

            if (responseUser) {
                reservation.userId = responseUser.id;
                console.log(reservation);

                const reservationData = {
                    carId: reservation.carId,
                    userId: reservation.userId,
                    pickupDate: reservation.pickupDate,
                    returnDate: reservation.returnDate
                }



                const responseReservation = await webService.addReservation(reservationData);

                if (reservationData) {
                    const modal = document.getElementById('reservation-modal');
                    const closeButton = document.querySelector("[data-close-modal");

                    if (modal) {
                        modal.showModal();
                    }

                    closeButton.addEventListener("click", () => {
                        modal.close();
                        window.location.href = '/';
                    });
                }

            } else {
                throw new Error('Failed to add user');
            }

        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const carPrice = calculatePrice(reservation.pickupDate, reservation.returnDate, selectedCar?.fleet?.dailyRate);

    // Si selectedCar existe, renderiza la información del coche y las fechas
    return (<>
        {selectedCar && (
            <section className='section-rent-info container'>

                <dialog data-modal id='reservation-modal' className='p-5 m-auto'>
                    <h1>Reservation successfully made.</h1>
                    <h2>Reservation details:</h2>
                    <p>Client: {formData.name} {formData.lastName} - {formData.identityNumber}</p>
                    <p>Date: From {reservation.pickupDate} to {reservation.returnDate}</p>
                    <p>Car: {selectedCar?.fleet?.brand} {selectedCar?.fleet?.model} or similar</p>
                    <p>Price: {selectedCar?.fleet?.dailyRate} x {carPrice.days} = {carPrice.price}€</p>
                    <img src={selectedCar?.fleet?.image} alt='car' />

                    <div className='row d-flex gap-3 pt-3'>
                        <button className='btn-cars btn-download'>Download PDF</button>
                        <button data-close-modal className='btn-cars'>Close</button>
                    </div>

                </dialog>

                <div className='rent-info'>
                    <div className='car-info'>
                        <p><span className='car-brand-model'>{selectedCar?.fleet?.brand} {selectedCar?.fleet?.model}</span><br /> or similar</p>
                        <img src={selectedCar?.fleet?.image} alt='car' />
                        <p className='daily-rate'>{selectedCar?.fleet?.dailyRate}€<span className='day'>/day</span> </p>
                    </div>
                    <div className='date-office-info'>
                        <p>{selectedCar?.office?.name}</p>
                        <p>From {shortDate(reservation.pickupDate)} to {shortDate(reservation.returnDate)}</p>
                    </div>
                </div>
                <div className='rent-driver-info'>
                    <form onSubmit={handleSubmit}>
                        <div className='driver-info'>
                            <div className='question'>
                                <p>WHO WILL DRIVE?</p>
                            </div>
                            <div className='form-content d-flex flex-column gap-2 gap-md-3'>

                                <div className='row'>
                                    <div className='first-name d-flex flex-column col-6'>
                                        <label>First name</label>
                                        <div className="input-container">
                                            <input
                                                id='input-name'
                                                className="input-text"
                                                type='text'
                                                value={formData.name}
                                                name="name"
                                                onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className='last-name d-flex flex-column col-6'>
                                        <label>Last name</label>
                                        <div className="input-container">
                                            <input
                                                id='input-last-name'
                                                className="input-text"
                                                type='text'
                                                value={formData.lastName}
                                                name="lastName"
                                                onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>

                                <div className='row gap-2 gap-md-0'>
                                    <div className='email-div col-12 col-lg-6'>
                                        <label>Email</label>
                                        <div className="input-container">
                                            <input
                                                className="input-text"
                                                type='text' />
                                        </div>
                                    </div>
                                    <div className='identity-number-div col-12 col-lg-6'>
                                        <label>Identity number</label>
                                        <div className="input-container">
                                            <input
                                                id='input-identity-number'
                                                className="input-text"
                                                type='text'
                                                value={formData.identityNumber}
                                                name="identityNumber"
                                                onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pay-info'>
                            <div className='question'>
                                <p>WHAT CREDIT CARD WOULD YOU LIKE TO PAY WITH?</p>
                            </div>
                            <div className='form-content d-flex flex-column gap-2'>
                                <div className='row gap-2 gap-md-0'>
                                    <div className='card-number d-flex flex-column col-12 col-lg-6'>
                                        <label>Card number</label>
                                        <div className="input-container">
                                            <input
                                                className="input-text"
                                                type='text' />
                                        </div>
                                    </div>
                                    <div className='cardholder d-flex flex-column col-12 col-lg-6 mt-1 mt-md-0'>
                                        <label>Cardholder name</label>
                                        <div className="input-container">
                                            <input
                                                className="input-text"
                                                type='text' />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='card-number d-flex flex-column col-6'>
                                        <label>Expiration date</label>
                                        <div className="input-container">
                                            <input
                                                className="input-text"
                                                type='text' />
                                        </div>
                                    </div>
                                    <div className='cardholder d-flex flex-column col-6'>
                                        <label>CVV</label>
                                        <div className="input-container">
                                            <input
                                                className="input-text"
                                                type='text' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className='btn-cars btn-pay'>Pay and Book</button>
                    </form>
                </div >
            </section >
        )}
    </>
    );
}

//<p>{JSON.stringify(selectedCar)}</p>