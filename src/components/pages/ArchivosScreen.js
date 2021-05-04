import React from 'react';
import { Navbar } from '../commons/NavBar';
import { useSelector } from 'react-redux';
import { Footer } from '../commons/Footer';


export const ArchivosScreen = () => {

    const { indicadoresList} = useSelector( state => state.indicadores);
    console.log(indicadoresList);

    return (
        <div className="journal__main-content">
            
            <Navbar />


            <main className="main container p-5">
            <div className="row">
                    <div className="col-md-12">
                        <p>Nombre del proyecto Nombre del proyecto Nombre</p>
                        <button className="Descargar PDF">descagar PDF</button> 
                    </div>
                    <div className="col-md-12">
                        <p>Nombre del proyecto Nombre del proyecto Nombre</p>
                        <button className="Descargar PDF">descagar PDF</button> 
                    </div>
                    <div className="col-md-12">
                        <p>Nombre del proyecto Nombre del proyecto Nombre</p>
                        <button className="Descargar PDF">descagar PDF</button> 
                    </div>
                    <div className="col-md-12">
                        <p>Nombre del proyecto Nombre del proyecto Nombre</p>
                        <button className="Descargar PDF">descagar PDF</button> 
                    </div>                    <div className="col-md-12">
                        <p>Nombre del proyecto Nombre del proyecto Nombre</p>
                        <button className="Descargar PDF">descagar PDF</button> 
                    </div>                    
                    <div className="col-md-12">
                        <p>Nombre del proyecto Nombre del proyecto Nombre</p>
                        <button className="Descargar PDF">descagar PDF</button> 
                    </div>
            </div>        
 
            </main>

            <Footer/>


        </div>
    )
}
