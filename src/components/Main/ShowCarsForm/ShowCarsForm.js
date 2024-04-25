import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import search from '../../../assets/images/icons/search.svg';
import arrow from '../../../assets/images/icons/arrow.svg';
import WebService from '../../../services/WebService';
import './ShowCarsForm.css';

export default function ShowCarsForm() {

    const webService = new WebService();

    const [offices, setOffices] = useState([]);

    useEffect(() => {
        // Llamar a la función para obtener las oficinas cuando se monta el componente
        async function fetchOffices() {
            try {
                const offices = await webService.getAllOffices();
                setOffices(offices);
            } catch (error) {
                console.error('Error fetching offices:', error);
            }
        }
        fetchOffices();
    }, []);

    const [formData, setFormData] = useState({
        pickupOffice: '',
        returnOffice: '',
        pickupDate: '',
        returnDate: ''
    });

    let reservation = {
        carId: '',
        officeId: '',
        userId: '',
        pickupDate: '',
        returnDate: ''
    };

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.pickupOffice && formData.returnOffice && formData.pickupDate && formData.returnDate) {
            
            const pickupOfficeId = offices.find(office => office.name === formData.pickupOffice)?.id;
            
            if (pickupOfficeId) {
                reservation.officeId = pickupOfficeId;
                reservation.pickupDate = formData.pickupDate;
                reservation.returnDate = formData.returnDate;

                console.log(reservation);
            } else {
                console.error(`No se encontró la oficina con el nombre '${formData.pickupOffice}'`);
            }

            // Redirigir al usuario a la página deseada con el estado de la ubicación   
            if (reservation.officeId && reservation.pickupDate && reservation.returnDate) {
                navigate('/rent', { state: { reservation } });
            } else {
                alert('No redirect.');
            }
        } else {
            alert("Por favor, complete todos los campos.");
        }
    };

    return <>
        <section className="section-show-cars">
            <form className='container show-cars-form' onSubmit={handleSubmit}>
                <p>Find exactly what you are looking for</p>
                <div className='form-content row gap-4 gap-md-0'>
                    <div className='select-office col-12 col-md-12 d-flex flex-column flex-md-row gap-3 pb-md-4'>
                        <div className='pickup-office d-flex flex-column'>
                            <label>Pick-up office</label>
                            <div className="input-container">
                                <img src={search} alt='search icon' />
                                <input
                                    id='input-pickup'
                                    className="input-text"
                                    type='text'
                                    list="pickup-options"
                                    value={formData.pickupOffice}
                                    name="pickupOffice"
                                    onChange={handleChange} />
                            </div>
                            <datalist id="pickup-options">
                                {offices.map((office) => (
                                    <option key={office.id} value={office.name}>{office.name}</option>
                                ))}
                            </datalist>
                        </div>
                        <div className='return-office d-flex flex-column'>
                            <label>Return office</label>
                            <div className="input-container">
                                <img src={arrow} alt='return arrow icon' />
                                <input
                                    id="input-return"
                                    className="input-text"
                                    type='text'
                                    list="return-options"
                                    value={formData.returnOffice}
                                    name="returnOffice"
                                    onChange={handleChange} />
                            </div>
                            <datalist id="return-options">
                                {offices.map((office, index) => (
                                    <option key={index} value={office.name}>{office.name}</option>
                                ))}
                            </datalist>
                        </div>
                    </div>
                    <div className='select-datetime d-flex flex-wrap flex-md-nowrap col-12 col-md-8 gap-3 '>
                        <div className='pickup-date d-flex flex-column'>
                            <label>Pick-up date</label>
                            <div className="input-container">
                                <input
                                    className="input-date"
                                    type='date'
                                    value={formData.pickupDate}
                                    name="pickupDate"
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className='return-date d-flex flex-column'>
                            <label>Return date</label>
                            <div className="input-container">
                                <input
                                    className="input-date"
                                    type='date'
                                    value={formData.returnDate}
                                    name="returnDate"
                                    onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="btn-cars-container col-12 col-md-4">
                        <button className="btn-cars">Show cars</button>
                    </div>
                </div>
            </form>
        </section>
    </>
}