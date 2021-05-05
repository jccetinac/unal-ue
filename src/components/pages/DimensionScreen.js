import React from 'react';
import { Navbar } from '../commons/NavBar';
import { useSelector } from 'react-redux';
import { Footer } from '../commons/Footer';
import { Link } from 'react-router-dom';


export const DimensionScreen = () => {

    const { indicadoresList} = useSelector( state => state.indicadores);
    console.log(indicadoresList);

    return (
        <div>
            
            <Navbar />


            <main className="main container p-5">       

                <h1>Indicadores</h1>
                <div className="row">
                    <div className="col-md-12">
                       <Link className="btn bt-primary w-100" to="/indicador/1"className="link">1.Porcentaje de empleo de empresas</Link><br></br>
                       <Link className="btn bt-primary w-100" to="/indicador/1"className="link">2.Porcentaje de empleo de empresas</Link><br></br>
                       <Link className="btn bt-primary w-100" to="/indicador/1"className="link">3.Porcentaje de empleo de empresas</Link><br></br>
                       <Link className="btn bt-primary w-100" to="/indicador/1"className="link">4.Porcentaje de empleo de empresas</Link><br></br>
                       <Link className="btn bt-primary w-100" to="/indicador/1"className="link">5.Porcentaje de empleo de empresas</Link><br></br>


                    </div>
                </div>   
            </main>

            <Footer/>


        </div>
    )
}
