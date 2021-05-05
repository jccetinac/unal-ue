import React from 'react';
import { Navbar } from '../commons/NavBar';
import { useSelector } from 'react-redux';
import { Footer } from '../commons/Footer';


export const HomeScreen = () => {

    const { indicadoresList} = useSelector( state => state.indicadores);
    console.log(indicadoresList);

    return (
        <div>
            
            <Navbar />


            <main className="main container p-5">
                <div className="row">
                    <div className="col-md-6">
                        <p>CONOZCA LA ESTRUCTURACION DE UN INSTRUMENTO PERIODICO DE MEDICION DEL EMPRENDMINETO PARA COLOMBIA</p>
                    </div>
                    <div className="col-md-6">
                        <img src="https://picsum.photos/500/500" className="img-fluid" />
                    </div>
                </div>   
            </main>

            <Footer/>


        </div>
    )
}
