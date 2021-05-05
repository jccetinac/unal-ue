import React from 'react';
import { Navbar } from '../commons/NavBar';
import { useSelector } from 'react-redux';
import { Footer } from '../commons/Footer';
import { Link } from 'react-router-dom';


export const IndicadoresScreen = () => {

    const { indicadoresList} = useSelector( state => state.indicadores);
    console.log(indicadoresList);

    return (
        <div className="journal__main-content">
            
            <Navbar />


            <main className="main container p-5">       
                <div className="row">
                    <div className="col-md-6">
                        <h1>Dimensiones</h1>
                        <Link to="/dimension/1" className="btn btn-primary w-100 mt-3"  >Basado en la empresa</Link>
                        <Link to="/dimension/2" className="btn btn-primary w-100 mt-3"  >Basado en el empleo</Link>
                        <Link to="/dimension/3" className="btn btn-primary w-100 mt-3"  >Basado en la riqueza</Link>

                    </div>
                    <div className="col-md-6">
                        grafico
                        <img src="https://picsum.photos/500/500" className="img-fluid"></img>
                    </div>
                </div>   
            </main>

            <Footer/>


        </div>
    )
}
