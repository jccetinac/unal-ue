import React from 'react';
import { Navbar } from '../commons/NavBar';
import { useSelector } from 'react-redux';
import { Footer } from '../commons/Footer';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


export const DimensionScreen = () => {

    const { descripcionesList } = useSelector( state => state.descripciones);


    return (
        <div>
            
            <Navbar />


            <main className="main container p-5">       

                <h1>Indicadores</h1>
                <div className="row">
                    <div className="col-md-6">
                           

                       <Accordion defaultActiveKey="0">

                            {descripcionesList?.map( indicador => (
                                <Card className="mt-3" key={ indicador.id }>
                                    <Accordion.Toggle as={Card.Header} eventKey={ indicador.id }>
                                    <b>{indicador.codigo}: </b>{indicador.nombre}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <p>{indicador.calculo}</p>
                                            <p>{indicador.observaciones}</p>
                                            <Link className="btn btn-primary w-100" to={"/indicador/"+indicador.codigo}>ver indicador</Link><br></br>
                                        </Card.Body>
                                    </Accordion.Collapse>

                                    <hr/>
                                </Card>
                            ))}

                        </Accordion>
                    </div>
                </div>   
            </main>

            <Footer/>


        </div>
    )
}
