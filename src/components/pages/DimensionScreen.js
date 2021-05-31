import React from 'react';
import { Navbar } from '../commons/NavBar';
import { useSelector } from 'react-redux';
import { Footer } from '../commons/Footer';
import { Link, useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


export const DimensionScreen = () => {

    const { id } = useParams();

    const { descripcionesList } = useSelector( state => state.descripciones);

    const indicadoresByDimension = descripcionesList.filter( indicador=> indicador['cat-m-teorico'] === id);
    // const indicadoresByDimension = descripcionesList;

    console.log(descripcionesList,indicadoresByDimension);
    return (
        <div>
            
            <Navbar />


            <main className="main container p-5">       

                <p>Indicadores de la dimensión: </p>
                <h1> {id} </h1>
                <div className="row">
                    <div className="col-md-6">
                           

                       <Accordion defaultActiveKey="0">

                            {indicadoresByDimension?.map( indicador => (
                                <Card className="mt-3" key={ indicador.id }>
                                    <Accordion.Toggle as={Card.Header} eventKey={ indicador.id }>
                                    <b>{indicador.codigo}: </b>{indicador.nombre}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={ indicador.id }>
                                        <Card.Body>
                                            <p><b>Cálculo: </b>{indicador.calculo}</p>
                                            <p><b>Definción: </b>{indicador.definicion}</p>
                                            <Link className="btn btn-primary w-100" to={"/indicador/"+indicador.codigo}>ver indicador</Link><br></br>
                                        </Card.Body>
                                    </Accordion.Collapse>
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
