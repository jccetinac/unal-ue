import React from 'react';
import { Navbar } from '../commons/NavBar';
import { useSelector } from 'react-redux';
import { Footer } from '../commons/Footer';
import { Link } from 'react-router-dom';


export const ProyectoScreen = () => {

    return (
        <div className="journal__main-content proyecto">
            
            <Navbar />


            <main className="main container p-5">
      
                <div className="row">                   
                    <h1>Pertinencia y beneficios:</h1>
                    <img src="https://firebasestorage.googleapis.com/v0/b/react-app-unal.appspot.com/o/grafico-unal.png?alt=media&token=fee20f45-bddb-41e3-b775-a3b3edb32e86" className="img-fluid w-50 m-auto mt-5 mb-5" />
                </div>  


                <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" 
                                    src="https://firebasestorage.googleapis.com/v0/b/react-app-unal.appspot.com/o/2.jpg?alt=media&token=b7659d6f-cb87-412d-9e10-93377346e2db" 
                                    alt="google button" />
                                <div className="card-body">
                                <p>Generar articulación en el ecosistema de emprendimiento</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                            <img className="card-img-top" 
                                    src="https://firebasestorage.googleapis.com/v0/b/react-app-unal.appspot.com/o/1.jpg?alt=media&token=82489fbd-f5d6-4462-8fae-be716d73013b" 
                                    alt="google button" />
                                <div className="card-body">
                                <p>Generar información para política pública</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                            <img className="card-img-top" 
                                    src="https://firebasestorage.googleapis.com/v0/b/react-app-unal.appspot.com/o/5.jpg?alt=media&token=2e275afd-6127-46eb-acd8-c5b8abde2d46" 
                                    alt="google button" />
                                <div className="card-body">
                                <p>ortalecimiento de las dinámicas regionales en la medición de la actividad emprendedora</p>
                            </div>
                        </div>    
                        </div>
                </div>  

                <div className="row">         
                        <div className="col-md-4">
                            <div className="card">
                            <img className="card-img-top" 
                                    src="https://firebasestorage.googleapis.com/v0/b/react-app-unal.appspot.com/o/7.jpg?alt=media&token=f0d0b9da-dffc-415a-af4d-ca0f96155e8c" 
                                    alt="google button" />
                                <div className="card-body">
                                <p>Disponer de indicadores que permitan la comparabilidad internacional</p>
                                </div>
                            </div>    
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                            <img className="card-img-top" 
                                    src="https://firebasestorage.googleapis.com/v0/b/react-app-unal.appspot.com/o/10.jpg?alt=media&token=2479d482-1517-4dfa-985c-7ef66d5ed13e" 
                                    alt="google button" />
                                <div className="card-body">
                                <p>Necesidad de disponer de una entidad autónoma e Independiente para la observación de la dinámica emprendedora del país</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                            <img className="card-img-top" 
                                    src="https://firebasestorage.googleapis.com/v0/b/react-app-unal.appspot.com/o/8.jpg?alt=media&token=03c0091a-8f6b-408f-9b3d-501b4eae1fc1" 
                                    alt="google button" />
                                <div className="card-body">
                                <p>Obtener información periódica para medir la dinámica emprendedora a partir del marco conceptual definido</p>
                                </div>
                            </div>
                        </div>
                </div>
                        
                <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                            <img className="card-img-top" 
                                    src="https://firebasestorage.googleapis.com/v0/b/react-app-unal.appspot.com/o/4.jpg?alt=media&token=d7141d24-a342-4692-a579-0b697d7bd0b1" 
                                    alt="google button" />
                                <div className="card-body">
                                <p>Oferta de un portafolio de productos (batería de indicadores, evaluaciones de impacto, estudios especializados sobre emprendimiento, diplomados, seminarios, conferencias especializadas e investigaciones en general</p>
                                </div>
                            </div>
                        </div>
                </div>
   

            </main>

            <Footer/>


        </div>
    )
}
