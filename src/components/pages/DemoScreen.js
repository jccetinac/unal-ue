import React from 'react';
import { Navbar } from '../commons/NavBar';


export const DemoScreen = () => {



    return (
        <div>
            
            <Navbar />


            <main className="main">
                <h3>llamando datosss:</h3>

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
