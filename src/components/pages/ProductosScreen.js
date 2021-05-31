import React from 'react';
import { Navbar } from '../commons/NavBar';
import { useSelector } from 'react-redux';
import { Footer } from '../commons/Footer';
import { Link } from 'react-router-dom';


export const ProductosScreen = () => {


    return (
        <div className="journal__main-content">
            
            <Navbar />


            <main className="main container productos p-5">
       
                <div className="row">
                    <div className="col-md-3">
                      <Link to="/indicadores">
                        <div className="squad bg-primary">
                            <i className="fas fa-cubes"></i>
                            <h3>Bateria de<br/>indicadores</h3>
                        </div>                     
                      </Link>  
                    </div>                    
                    <div className="col-md-3">
                    <Link to="/proximamente">
                         <div className="squad">
                          <i className="fa fa-pie-chart"></i>
                        <h3>Evaluación de<br/> impacto</h3>
                        </div>
                    </Link>    
                    </div>
                    <div className="col-md-3">
                        <Link to="/proximamente">
                            <div className="squad">
                                <i className="fa fa-podcast"></i>
                                <h3>Seminarios</h3>
                            </div>
                        </Link>
                    </div>                    
                    <div className="col-md-3">
                        <Link to="/proximamente">
                            <div className="squad">
                                <i className="fas fa-chalkboard-teacher	"></i>
                                <h3>Conferencias<br/>Especializadas</h3>
                            </div>
                        </Link>
                    </div> 
                    <div className="col-md-3">
                        <Link to="/proximamente">
                            <div className="squad">
                                <i className="fas fa-poll"></i>
                                <h3>Estudios sobre<br/> emprendimiento</h3>
                            </div>   
                        </Link>
                    </div> 
                    <div className="col-md-3">
                        <Link to="/proximamente">
                        <div className="squad">
                            <i className="fas fa-poll-h"></i>
                            <h3>Estudios <br/>Especializados</h3>
                        </div>   
                        </Link>
                    </div> 
                    <div className="col-md-3">
                        <Link to="/proximamente">
                        <div className="squad">
                            <i className="fa fa-newspaper-o"></i>
                            <h3>Diplomados</h3>
                        </div>
                        </Link>
                    </div> 
                    <div className="col-md-3">
                        <Link to="/proximamente">
                        <div className="squad">
                            <i className="fas fa-search-location"></i>
                            <h3>Investigaciones</h3>
                        </div> 
                        </Link>
                    </div>    
                </div>   
                
            </main>

            <Footer/>


        </div>
    )
}
