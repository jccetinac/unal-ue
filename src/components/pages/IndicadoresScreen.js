import React from 'react';
import { Navbar } from '../commons/NavBar';
import { Footer } from '../commons/Footer';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const IndicadoresScreen = () => {

    const { descripcionesList } = useSelector( state => state.descripciones);
    const onlyUnique= (value, index, self)=> { return self.indexOf(value) === index; };
    const categorias = descripcionesList.map(indicador => indicador['cat-m-teorico']).filter(cat=> cat !== undefined).filter( onlyUnique );
    console.log(categorias);

    return (
        <div className="journal__main-content">
            
            <Navbar />


            <main className="main container p-5">  
                <h1>Dimensiones</h1>  
                <h3 className="p-2 vertical-text">Emprendimiento | Empresa </h3>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card p-4">
                            <h4 className="mb-3 mt-3"><b>Insumos:</b></h4>
                            <p>determinates del emprendimiento</p>
                            <Link  className="btn btn-light text-gray w-100 mt-3"  >Cultura y capital humano</Link>
                            <Link  className="btn btn-light text-gray w-100 mt-3"  >Acceso afinanciamiento</Link>
                            <Link  className="btn btn-light text-gray w-100 mt-3"  >Redes</Link>
                            <Link  className="btn btn-light text-gray w-100 mt-3"  >Marco regulatorio e institucional</Link>
                            <Link  className="btn btn-light text-gray w-100 mt-3"  >Industria de soporte</Link>
                            <Link  className="btn btn-light text-gray w-100 mt-3"  >Innovación y desarrollo tecnológico</Link>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="card p-4">
                             <h4 className="mb-3 mt-3"><b>Desempeño: </b></h4>
                             <p>desempeño empresarial a nivel micro</p>
                                {categorias.map(categoria=>(
                                <Link to={ "/dimension/"+ categoria } className="btn btn-primary w-100 mt-3"  >{categoria}</Link>
                                ))} 
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-4">
                            <h4 className="mb-3 mt-3"><b>Impacto:</b></h4>
                            <p>desempeño empresarial (a nivel macro)</p>
                            <Link  className="btn btn-light text-gray w-100 mt-3"  >Empleo</Link>
                            <Link  className="btn btn-light text-gray w-100 mt-3"  >Formalidad</Link>
                            <Link  className="btn btn-light text-gray w-100 mt-3"  >Productividad</Link>
                            <Link  className="btn btn-light text-gray w-100 mt-3"  >Crecimeinto económico</Link>
                        </div>
                    </div>  
                </div>   
                
                <div className="bg-primary text-white mt-2">
                <h3 className="text-center p-2">Emprendedor <i className="fas fa-angle-double-right"></i></h3>
                </div>
            
            </main>

            <Footer/>


        </div>
    )
}

