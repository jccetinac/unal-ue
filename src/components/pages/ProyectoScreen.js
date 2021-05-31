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
                    
                    <h2>Pertinencia y beneficios:</h2>
                        <ul>
                        <li>Generar articulación en el ecosistema de emprendimiento</li>
                        <li>Generar información para política pública</li>
                        <li>Fortalecimiento de las dinámicas regionales en la medición de la actividad emprendedora</li>
                        <li>Disponer de indicadores que permitan la comparabilidad internacional</li>
                        <li>Necesidad de disponer de una entidad autónoma e Independiente para la observación de la dinámica emprendedora del país</li>
                        <li>Obtener información periódica para medir la dinámica emprendedora a partir del marco conceptual definido</li>
                        <li>Oferta de un portafolio de productos (batería de indicadores, evaluaciones de impacto, estudios especializados sobre emprendimiento, diplomados, seminarios, conferencias especializadas e investigaciones en general</li> 
                        </ul>


                    
                    
                    
                    <Link to="/archivos" className="btn btn-primary d-block float-right">Productos</Link>

                    </div>
                    <div className="col-md-6">
                        <img src="/img/grafico.png" className="img-fluid w-70" />
                    </div>
                </div>   
            </main>

            <Footer/>


        </div>
    )
}
