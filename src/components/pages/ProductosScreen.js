import React from 'react';
import { Navbar } from '../commons/NavBar';
import { useSelector } from 'react-redux';
import { Footer } from '../commons/Footer';


export const ProductosScreen = () => {

    const { indicadoresList} = useSelector( state => state.indicadores);
    console.log(indicadoresList);

    return (
        <div className="journal__main-content">
            
            <Navbar />


            <main className="main container productos p-5">
       
                <div className="row">
                    <div className="col-md-3">
                      <div className="squad">
                          <i className="fa fa-archive"></i>
                        <h3>Bateria de<br/>indicadores</h3>
                      </div>  
                    </div>                    
                    <div className="col-md-3">
                        <div className="squad">
                          <i className="fa fa-archive"></i>
                        <h3>Evaluación de<br/> impacto</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="squad">
                            <i className="fa fa-archive"></i>
                            <h3>Seminarios</h3>
                        </div>
                    </div>                    
                    <div className="col-md-3">
                        <div className="squad">
                            <i className="fa fa-archive"></i>
                            <h3>Conferencias<br/>Especializadas</h3>
                        </div>
                    </div> 
                    <div className="col-md-3">
                        <div className="squad">
                            <i className="fa fa-archive"></i>
                            <h3>Estudios sobre<br/> emprendimiento</h3>
                        </div>    
                    </div> 
                    <div className="col-md-3">
                        <div className="squad">
                            <i className="fa fa-archive"></i>
                            <h3>Estudios <br/>Especializados</h3>
                        </div>    
                    </div> 
                    <div className="col-md-3">
                        <div className="squad">
                            <i className="fa fa-archive"></i>
                            <h3>Diplomados</h3>
                        </div>    
                    </div> 
                    <div className="col-md-3">
                        <div className="squad">
                            <i className="fa fa-archive"></i>
                            <h3>Investigaciones</h3>
                        </div>    
                    </div>    
                </div>   
                
            </main>

            <Footer/>


        </div>
    )
}
