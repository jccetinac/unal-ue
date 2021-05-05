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


            <main className="main archivos container p-5">
                <h1 className="mb-5">Productos</h1>
            <div className="row">
                    <div className="col-md-8">
                        <p>Nombre del proyecto Nombre del proyecto Nombre</p>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-primary">descagar PDF</button> 
                    </div>
            </div>        
            <div className="row mt-3">
                    <div className="col-md-8">
                        <p>Nombre del proyecto Nombre del proyecto Nombre</p>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-primary">descagar PDF</button> 
                    </div>
            </div>    
            <div className="row mt-3">
                    <div className="col-md-8">
                        <p>Nombre del proyecto Nombre del proyecto Nombre</p>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-primary">descagar PDF</button> 
                    </div>
            </div>    
            <div className="row mt-3">
                    <div className="col-md-8">
                        <p>Nombre del proyecto Nombre del proyecto Nombre</p>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-primary">descagar PDF</button> 
                    </div>
            </div>    
            <div className="row mt-3">
                    <div className="col-md-8">
                        <p>Nombre del proyecto Nombre del proyecto Nombre</p>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-primary">descagar PDF</button> 
                    </div>
            </div>    
            </main>

            <Footer/>


        </div>
    )
}
