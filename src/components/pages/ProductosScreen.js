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


            <main className="main container p-5">
       
                <div className="row">
                    <div className="col-md-3">
                      <div className="squad" >
                          <i className="fa fa-archive"></i>
                        <h3>Bateria de indicadores</h3>
                      </div>  
                    </div>                    
                    <div className="col-md-3">
                        <img src="https://picsum.photos/500/500" className="img-fluid" />
                        <h3>Evaluación de impacto</h3>
                    </div>
                    <div className="col-md-3">
                        <img src="https://picsum.photos/500/500" className="img-fluid" />
                        <h3>Seminarios</h3>
                    </div>                    
                    <div className="col-md-3">
                        <img src="https://picsum.photos/500/500" className="img-fluid" />
                        <h3>Conferencias Especializadas</h3>
                    </div> 
                    <div className="col-md-3">
                        <img src="https://picsum.photos/500/500" className="img-fluid" />
                        <h3>Estudios sobre emprendimiento</h3>
                    </div> 
                    <div className="col-md-3">
                        <img src="https://picsum.photos/500/500" className="img-fluid" />
                        <h3>Estudios Especializados</h3>
                    </div> 
                    <div className="col-md-3">
                        <img src="https://picsum.photos/500/500" className="img-fluid" />
                        <h3>Diplomados</h3>
                    </div> 
                    <div className="col-md-3">
                        <img src="https://picsum.photos/500/500" className="img-fluid" />
                        <h3>Investigaciones</h3>
                    </div>    
                </div>   
                
            </main>

            <Footer/>


        </div>
    )
}
