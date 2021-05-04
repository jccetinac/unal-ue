import React from 'react';
import { Navbar } from '../commons/NavBar';
import { useSelector } from 'react-redux';
import { Footer } from '../commons/Footer';
import { Link } from 'react-router-dom';


export const DimensionScreen = () => {

    const { indicadoresList} = useSelector( state => state.indicadores);
    console.log(indicadoresList);

    return (
        <div className="journal__main-content">
            
            <Navbar />


            <main className="main container p-5">       
                <div className="row">
                    <div className="col-md-12">
                       <Link className="btn bt-primary text-white" to="/indicador/1"className="link">1.Porcentaje de empleo de empresas</Link>
                    </div>
                </div>   
            </main>

            <Footer/>


        </div>
    )
}
