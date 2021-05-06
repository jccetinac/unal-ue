import React from 'react';
import { Navbar } from '../commons/NavBar';
import { useSelector } from 'react-redux';
import { Footer } from '../commons/Footer';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


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
                           

                       <Accordion defaultActiveKey="0">
                            <Card className="mt-3">
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                1.Porcentaje de empleo de empresas
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                <p><b>Definición: </b>Número de personas empleadas en el período de referencia t en empresas
                                    empleadoras nacidas en t dividido por el número de personas empleadas en t en empresas
                                    empleadoras.
                                    Formula: (Número de personas empleadas en el período de referencia (t) en las empresas
                                    recién nacidas en t / número de personas empleadas en t en empresas activas en t )*100</p>
                                <Link className="btn btn-primary w-100" to="/indicador/1">ver indicador</Link><br></br>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="mt-3">
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                2.Tasa de mortalidad de empresas empleadoras
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                <p><b>Definición: </b>Número de personas empleadas en el período de referencia t en empresas
                                    empleadoras nacidas en t dividido por el número de personas empleadas en t en empresas
                                    empleadoras.
                                    Formula: (Número de personas empleadas en el período de referencia (t) en las empresas
                                    recién nacidas en t / número de personas empleadas en t en empresas activas en t )*100</p>
                                <Link className="btn btn-primary w-100" to="/indicador/2">ver indicador</Link><br></br>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="mt-3">
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                1.Porcentaje de empleo de empresas
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                <p><b>Definición: </b>Número de personas empleadas en el período de referencia t en empresas
                                    empleadoras nacidas en t dividido por el número de personas empleadas en t en empresas
                                    empleadoras.
                                    Formula: (Número de personas empleadas en el período de referencia (t) en las empresas
                                    recién nacidas en t / número de personas empleadas en t en empresas activas en t )*100</p>
                                <Link className="btn btn-primary w-100" to="/indicador/1">ver indicador</Link><br></br>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="mt-3">
                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                2.Tasa de mortalidad de empresas empleadoras
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                <p><b>Definición: </b>Número de personas empleadas en el período de referencia t en empresas
                                    empleadoras nacidas en t dividido por el número de personas empleadas en t en empresas
                                    empleadoras.
                                    Formula: (Número de personas empleadas en el período de referencia (t) en las empresas
                                    recién nacidas en t / número de personas empleadas en t en empresas activas en t )*100</p>
                                <Link className="btn btn-primary w-100" to="/indicador/2">ver indicador</Link><br></br>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>




                    </div>
                </div>   
            </main>

            <Footer/>


        </div>
    )
}
