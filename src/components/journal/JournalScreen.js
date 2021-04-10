import React from 'react';
import { Sidebar } from './Sidebar';
import { NoteScreen } from '../notes/NoteScreen';
import { useSelector } from 'react-redux';
// import { NothingSelected } from './NothingSelected';


export const JournalScreen = () => {

    const { indicadoresList} = useSelector( state => state.indicadores);
    console.log(indicadoresList);

    return (
        <div className="journal__main-content">
            
            <Sidebar />


            <main>

                {indicadoresList?.map( indicador => (
                    <div className="jumbotron p-3" key={ indicador.id }>
                        <h1>{indicador.name}</h1>
                        <p>{indicador.value}</p>
                        <p>{indicador.type}</p>
                        <i>{indicador.autho}</i>
                    </div>
                ))}

            </main>


        </div>
    )
}
