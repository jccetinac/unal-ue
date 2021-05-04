import React from 'react';
import { Navbar } from '../commons/NavBar';
import { useSelector } from 'react-redux';
import { Footer } from '../commons/Footer';


export const IndicadoresScreen = () => {

    const { indicadoresList} = useSelector( state => state.indicadores);
    console.log(indicadoresList);

    return (
        <div className="journal__main-content">
            
            <Navbar />


            <main className="main container p-5">       
                <div className="row">
                    <div className="col-md-6">
                        emprendimiento
                    </div>
                    <div className="col-md-6">
                        empresa
                    </div>
                </div>   
            </main>

            <Footer/>


        </div>
    )
}
