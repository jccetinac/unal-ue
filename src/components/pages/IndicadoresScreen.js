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


            <main className="main container p-5">  <h1>Dimensiones</h1>     
                <div className="row">
                    <div className="col-md-4">
                        
                        <h4 className="mb-3 mt-3"><b>Impacto:</b></h4>
                        <p>desempeño empresarial (a nivel macro)</p>
                        <Link  className="btn btn-light text-gray w-100 mt-3"  >Empleo</Link>
                        <Link  className="btn btn-light text-gray w-100 mt-3"  >Formalidad</Link>
                        <Link  className="btn btn-light text-gray w-100 mt-3"  >Productividad</Link>
                        <Link  className="btn btn-light text-gray w-100 mt-3"  >Crecimeinto económico</Link>
                    </div>
                    <div className="col-md-4">
                        <h4 className="mb-3 mt-3"><b>Desempeño: </b></h4>
                        <p>desempeño empresarial a nivel micro</p>
                        <Link to="/dimension/1" className="btn btn-primary w-100 mt-3"  >Basado en la empresa</Link>
                        <Link to="/dimension/2" className="btn btn-primary w-100 mt-3"  >Basado en el empleo</Link>
                        <Link to="/dimension/3" className="btn btn-primary w-100 mt-3"  >Basado en la riqueza</Link>
                    </div>
                    <div className="col-md-4">
                        <h4 className="mb-3 mt-3"><b>Insumos:</b></h4>
                        <p>determinates del emprendimiento</p>
                        <Link  className="btn btn-light text-gray w-100 mt-3"  >Cultura y capital humano</Link>
                        <Link  className="btn btn-light text-gray w-100 mt-3"  >Acceso afinanciamiento</Link>
                        <Link  className="btn btn-light text-gray w-100 mt-3"  >Redes</Link>
                        <Link  className="btn btn-light text-gray w-100 mt-3"  >Marco regulatorio e institucional</Link>
                        <Link  className="btn btn-light text-gray w-100 mt-3"  >Industria de soporte</Link>
                        <Link  className="btn btn-light text-gray w-100 mt-3"  >Innovación y desarrollo tecnológico</Link>
                    </div>
                      
                </div>   
            </main>

            <Footer/>


        </div>
    )
}
