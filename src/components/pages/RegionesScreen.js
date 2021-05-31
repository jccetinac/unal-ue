import React from 'react';
import { Navbar } from '../commons/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from '../commons/Footer';
import { Link } from 'react-router-dom';
import { setSelectedCity } from '../../actions/indicadores';


export const RegionesScreen = () => {

    const dispatch = useDispatch();
   

   

    const setcitySelected= (city)=>{
        console.log(city);
        dispatch( setSelectedCity(city) ); 
    };

    return (
        <div className="journal__main-content">
            
            <Navbar />


            <main className="main container p-5">
            <div className="row">
                    <div className="col-md-3 mb-5">
                        <Link className="btn btn-light text-gray d-block mt-3" to="/proximamente" >Caribe</Link> 
                        <Link className="btn btn-primary d-block mt-3" onClick={setcitySelected('bucaramanga')} to="/indicador/DT_CDC_015" >Santanderes</Link> 
                        <Link className="btn btn-light text-gray d-block mt-3" to="/proximamente" >Antioquia</Link>
                        <Link className="btn btn-light text-gray d-block mt-3" to="/proximamente" >Eje Cafetero</Link>
                        <Link className="btn btn-light text-gray d-block mt-3" to="/proximamente" >Pacífico</Link>
                        <Link className="btn btn-light text-gray d-block mt-3" to="/proximamente" >Central</Link> 
                        <Link className="btn btn-light text-gray d-block mt-3" to="/proximamente" >Llanos Orientales</Link>

                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <img src="/img/mapa.jpeg" className="img-fluid w-100" />
                    </div>

            </div>        
 
            </main>

            <Footer/>


        </div>
    )
}
