import React from 'react';
import { Navbar } from '../commons/NavBar';
import { Footer } from '../commons/Footer';
import SimpleSlider from '../commons/Slider';

export const HomeScreen = () => {


    return (
        <div>
            
            <Navbar />


   
                <SimpleSlider />
                <div className="container p-5 mt-4">
                    <p className="text-justify">El Gobierno Nacional expidió el pasado 30 de noviembre el Documento Conpes No. 4011 “Política Nacional de Emprendimiento”, el cual tiene como objetivo generar condiciones habilitantes en el ecosistema emprendedor para la creación, sostenibilidad y crecimiento de emprendimientos que contribuyan a la generación de ingresos, riqueza y aumentos en la productividad e internacionalización empresarial. Esta política plantea cinco objetivos específicos:</p>
                    <ul className="mt-5">
                        <li>Fortalecer el desarrollo de habilidades y fomentar una cultura emprendedora</li>
                        <li>Mejorar el acceso y la sofisticación de mecanismos de financiamiento </li>
                        <li>Fortalecer las redes y las estrategias de comercialización </li>
                        <li>Facilitar el desarrollo tecnológico y la innovación en los emprendimientos </li>
                        <li>Fortalecer la arquitectura institucional para lograr una oferta pública articulada, eficiente, oportuna y basada en evidencia, que brinde condiciones habilitantes al ecosistema emprendedor.</li>
                        </ul>
                </div>
           

            <Footer/>


        </div>
    )
}
