import React from 'react';
import { Navbar } from '../commons/NavBar';
import { useSelector } from 'react-redux';
import { Footer } from '../commons/Footer';
import { Link } from 'react-router-dom';


export const ProyectoScreen = () => {

    return (
        <div className="journal__main-content">
            
            <Navbar />


            <main className="main container p-5">
      
                <div className="row">
                    <div className="col-md-6 text-justify">
                    <p> <b>Nombre del proyecto: </b>
                        ESTRUCTURACIÓN DE UN INSTRUMENTO PERIÓDICO DE MEDICIÓN DEL EMPRENDIMIENTO PARA COLOMBIA
                        Iniciativa del Ministerio de Comercio Industria y Turismo – MINCIT con apoyo del Programa Colombia + Competitiva, Cooperación de SECO, Embajada Suiza en Colombia -Facilitado por Swisscontact</p>
                    <p><b>Ejecutor: </b>Unidad de emprendimiento e innovación Universidad Nacional de Colombia</p>
                    <p><b>Objetivo del proyecto: </b>
                        Construir, bajo criterios de comparabilidad internacional, una batería de indicadores que de cuenta de la actividad emprendedora en Colombia y produzca la información requerida para soportar el diseño de política pública e instrumentos para la promoción del emprendimiento. 
                        Definición de un modelo de operación para el sistema de medición de emprendimiento, que implemente la batería de indicadores propuesta, para la generación de información de manera permanente.</p>
                    <p><b>¿Qué problema resuelve el observatorio?: </b>Actualmente la Información sobre la actividad emprendedora dispersa y desarticulada, con el observatorio la información estará consolidada para tomar decisiones y será comparable con países OCDE y con despliegue regional</p>  
                    <Link to="/archivos" className="btn btn-primary d-block float-right">Productos</Link>

                    </div>
                    <div className="col-md-6">
                        <img src="/img/portada1.png" className="img-fluid w-70" />
                    </div>
                </div>   
            </main>

            <Footer/>


        </div>
    )
}
