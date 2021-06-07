import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCity, setSelectedYear } from '../../actions/indicadores';


export const FilterGeneral = ({listaCiudades, listaYears}) => {
    const dispatch = useDispatch();

  const { citySelected, yearSelected }= useSelector( state => state.indicadores);
    

    function handleSelectChangeCity(event) {
        dispatch( setSelectedCity(event.target.value) ); 
    }

    function handleSelectChangeYear(event) {
        dispatch( setSelectedYear(event.target.value) ); 
    }

    return (
        <form>
            <div className="row pt-4">
                <div className="col-md-5">
                        <select className="form-control"  value={yearSelected} onChange={handleSelectChangeYear}> /
                            <option>elige un año</option>
                            {listaYears?.map( year => (
                            <option value={year} key={year} >{year}</option>  
                            ))}
                        </select>

                </div>
                <div className="col-md-5">
                        <select className="form-control"  value={citySelected} onChange={handleSelectChangeCity}> /
                            <option>elige una ciudad</option>
                            {listaCiudades?.map( ciudad => (
                            <option value={ciudad} key={ciudad}>{ciudad}</option>  
                            ))}
                        </select>

                </div>
    
                <div className="col-md-2">
                    <button className="btn btn-primary text-white" ><i className="fa fa-search"></i></button>
                </div>
            </div>
        </form>
    )
}
