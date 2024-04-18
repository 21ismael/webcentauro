import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShowCarsForm.css';
import search from '../../../assets/images/icons/search.svg';
import arrow from '../../../assets/images/icons/arrow.svg';
import logoIcon from '../../../assets/images/logos/logo-icon.svg';
import WebService from '../../../services/WebService';

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
        console.log(formData.pickupOffice + " //// " + formData.returnOffice + " //// " + formData.pickupDate + " /// " + formData.returnDate)
        if (formData.pickupOffice && formData.returnOffice && formData.pickupDate && formData.returnDate) {
            // Redirigir al usuario a la página deseada con el estado de la ubicación
            navigate('/rent', { state: { formData } });
        } else {
            alert("Por favor, complete todos los campos.");
        }
    };

    return <>
        <section id="rent-car" className="section-show-cars">
            <div className='booking-container'>
                <form className='container form-container d-flex flex-column' onSubmit={handleSubmit}>
                    <p>Find exactly what you are looking for</p>
                    <div className='form-content row gap-4 gap-md-0'>
                        <div className='select-office col-12 col-md-12 d-flex flex-column flex-md-row gap-2 pb-md-4'>
                            <div className='pickup-office d-flex flex-column'>
                                <label>Pick-up</label>
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
                                    {offices.map((office, index) => (
                                        <option key={index} value={office.name}>{office.name}</option>
                                    ))}
                                </datalist>
                            </div>
                            <div className='return-office d-flex flex-column'>
                                <label>Return</label>
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
                        <div className='select-datetime d-flex col-12 col-md-8 gap-3'>
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
            </div>
        </section>
    </>
}



/*div className='z-logo'>
                        <img src={logoIcon} />
                    </div>*/