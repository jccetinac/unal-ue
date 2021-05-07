import React from 'react';


export const FilterGeneral = () => {

    return (
        <form>
            <div className="row pt-4">
                <div className="col-md-6">
                        <select className="form-control">
                            <option>indicador 1</option>
                            <option>indicador 2</option>
                            <option>indicador 3</option>
                            <option>indicador 4</option>
                        </select>
                </div>
                <div className="col-md-2">
                        <select className="form-control">
                            <option>2017</option>
                            <option>2018</option>
                            <option>2019</option>
                        </select>
                </div>
                <div className="col-md-2">
                        <select className="form-control">
                            <option>2017</option>
                            <option>2018</option>
                            <option>2019</option>
                        </select>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-info" >buscar</button>
                </div>
            </div>
        </form>
    )
}
