import React from 'react';


export const DescriptionGeneral = ({indicador}) => {
    console.log(indicador);
    return (<div>
        <h1>{ indicador.nombre }</h1>
        <div className="row pt-4">
            <div className="col-md-5 ">
                
                <p><b>Definición :</b> {indicador.definicion}</p>
                
            </div>
            <div className="col-md-5">
                <p><b>Cálculo: </b>{indicador.calculo}</p>
            </div>

        </div>
    </div>
    )
}









