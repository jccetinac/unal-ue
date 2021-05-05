import React from 'react';
import { Navbar } from '../commons/NavBar';
import { useSelector } from 'react-redux';
import { Footer } from '../commons/Footer';
import { Link } from 'react-router-dom';


export const ProyectoScreen = () => {

    const { indicadoresList} = useSelector( state => state.indicadores);
    console.log(indicadoresList);

    return (
        <div className="journal__main-content">
            
            <Navbar />


            <main className="main container p-5">
            <div className="row">
                    <div className="col-md-12">Nombre del proyecto Nombre del proyecto Nombre del proyecto Nombre del proyecto Nombre del proyecto </div>
            </div>        
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://picsum.photos/500/500" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <Link to="/archivos" className="btn btn-primary">producto (ARCHIVOS)</Link>
                    </div>
                </div>   
            </main>

            <Footer/>


        </div>
    )
}
