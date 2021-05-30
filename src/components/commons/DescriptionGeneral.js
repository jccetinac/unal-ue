import React from 'react';


export const DescriptionGeneral = ({indicador}) => {

    return (<div>
        <div className="row pt-4">
            <div className="col-md-5 ">
                <p><b>{ indicador.nombre } :</b>{indicador.definicion}</p>
                
            </div>
            <div className="col-md-5">
                <i>Cálculo: {indicador.calculo}</i>
                <p>Seleccione una ciudad o país</p>
            </div>

        </div>
    </div>
    )
}









