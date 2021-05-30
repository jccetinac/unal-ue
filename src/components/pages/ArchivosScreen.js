import React from 'react';
import { Navbar } from '../commons/NavBar';
import { useSelector } from 'react-redux';
import { Footer } from '../commons/Footer';
import { Link } from 'react-router-dom';


export const ArchivosScreen = () => {

    const { indicadoresList} = useSelector( state => state.indicadores);

    return (
        <div className="journal__main-content">
            
            <Navbar />


            <main className="main archivos container p-5">
                <h1 className="mb-5">Productos</h1>

                <div className="row">
                        <div className="col-md-8">
                            <p>Mejores prácticas internacionales en medición del emprendimiento</p>
                        </div>
                        <div className="col-md-4">
                            <a href='/assets/demo.pdf' download className="btn btn-primary">descagar PDF</a> 
                        </div>
                </div>        
  
                <div className="row">
                        <div className="col-md-8">
                            <p>Batería de 60  indicadores comparables internacionalmente, su relevancia, definición y fórmula de cálculo</p>
                        </div>
                        <div className="col-md-4">
                            <a href='/assets/demo.pdf' download className="btn btn-primary">descagar PDF</a> 
                        </div>
                </div>  

                <div className="row">
                        <div className="col-md-8">
                            <p>Propuesta de diseño y operación del instrumento de medición periódico.</p>
                        </div>
                        <div className="col-md-4">
                            <a href='/assets/demo.pdf' download className="btn btn-primary">descagar PDF</a> 
                        </div>
                </div>  

                <div className="row">
                        <div className="col-md-8">
                            <p>Línea de base de los indicadores que cuentan con fuentes nacionales de información disponibles y bases de datos con cálculos y fuentes de información por cada indicador</p>
                        </div>
                        <div className="col-md-4">
                            <a href='/assets/demo.pdf' download className="btn btn-primary">descagar PDF</a> 
                        </div>
                </div>  

                <div className="row">
                        <div className="col-md-8">
                            <p>Hoja de ruta que deberá ser implementada, por parte del Gobierno Nacional, para obtener la información sobre emprendimiento que no está disponible, y que permita la inclusión de Colombia en los principales reportes </p>
                        </div>
                        <div className="col-md-4">
                            <a href='/assets/demo.pdf' download className="btn btn-primary">descagar PDF</a> 
                        </div>
                </div>  

                <div className="row">
                        <div className="col-md-8">
                            <p>Detalle de la implementación de un piloto de medición y su estrategia de comunicaciones </p>
                        </div>
                        <div className="col-md-4">
                            <a href='/assets/demo.pdf' download className="btn btn-primary">descagar PDF</a> 
                        </div>
                </div>  

            </main>

            <Footer/>


        </div>
    )
}
