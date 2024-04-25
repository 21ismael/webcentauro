import React from 'react';
import './Main.css';
import ShowCarsForm from './ShowCarsForm/ShowCarsForm';
import Offices from'./Offices/Offices';
import springIamge from '../../assets/images/photos/spring.webp';
import captura from '../../assets/images/photos/captura.jpg';

export default function Main() {
    return <>
        <ShowCarsForm />
        <Offices />
    </>
}
