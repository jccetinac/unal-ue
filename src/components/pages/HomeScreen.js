import React from 'react';
import { Navbar } from '../commons/NavBar';
import { useSelector } from 'react-redux';


export const HomeScreen = () => {

    const { indicadoresList} = useSelector( state => state.indicadores);
    console.log(indicadoresList);

    return (
        <div className="journal__main-content">
            
            <Navbar />


            <main className="main">
                <h3>llamando datos:</h3>

                {indicadoresList?.map( indicador => (
                    <div className="jumbotron p-3" key={ indicador.id }>
                        <h1>{indicador.name}</h1>
                        <p>{indicador.value}</p>
                        <p>{indicador.type}</p>
                        <i>{indicador.autho}</i>
                        <hr/>
                    </div>
                ))}

            </main>


        </div>
    )
}
