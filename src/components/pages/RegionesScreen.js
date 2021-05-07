import React from 'react';
import { Navbar } from '../commons/NavBar';
import { useSelector } from 'react-redux';
import { Footer } from '../commons/Footer';
import { Link } from 'react-router-dom';


export const RegionesScreen = () => {

    const { indicadoresList} = useSelector( state => state.indicadores);
    console.log(indicadoresList);

    return (
        <div className="journal__main-content">
            
            <Navbar />


            <main className="main container p-5">
            <div className="row">
                    <div className="col-md-6 mb-5">
                        <Link className="btn btn-primary d-block mt-3">Caribe</Link> 
                        <Link className="btn btn-primary d-block mt-3">Santanderes</Link> 
                        <Link className="btn btn-primary d-block mt-3">Antioquia</Link>
                        <Link className="btn btn-primary d-block mt-3">Eje Cafetero</Link>
                        <Link className="btn btn-primary d-block mt-3">VPacífico</Link>
                        <Link className="btn btn-primary d-block mt-3">Central</Link> 
                        <Link className="btn btn-primary d-block mt-3">Llanos Orientales</Link>

                    </div>
                    <div className="col-md-6">
                        <img src="/img/mapa.jpeg" className="img-fluid w-100" />
                    </div>

            </div>        
 
            </main>

            <Footer/>


        </div>
    )
}
