import React from 'react';


export const FilterGeneral = () => {

    return (
        <form>
            <div className="row pt-4">
                <div className="col-md-5">
                        <select className="form-control">
                            <option>indicador 1</option>
                            <option>indicador 2</option>
                            <option>indicador 3</option>
                            <option>indicador 4</option>
                        </select>
                </div>
                <div className="col-md-5">
                        <select className="form-control">
                            <option>Bogotá</option>
                            <option>Medellin</option>
                            <option>Bucaramanga</option>
                        </select>
                </div>
    
                <div className="col-md-2">
                    <button className="btn btn-info text-white" ><i className="fa fa-search"></i></button>
                </div>
            </div>
        </form>
    )
}
