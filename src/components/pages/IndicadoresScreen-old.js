import React from 'react';
import { Navbar } from '../commons/NavBar';
import { Footer } from '../commons/Footer';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const IndicadoresScreen = () => {

    const { descripcionesList } = useSelector( state => state.descripciones);
    const categorias = descripcionesList.map(indicador => indicador['cat-m-teorico']);
    console.log(categorias.filter(cat=> cat !== undefined));

    return (
        <div className="journal__main-content">
            
            <Navbar />


            <main className="main container p-5">  <h1>Dimensionessssss</h1>     
                <div className="row">
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
                    <div className="col-md-4">
                        <div className="card p-4">
                             <h4 className="mb-3 mt-3"><b>Desempeño: </b></h4>
                            <p>desempeño empresarial (a nivel micro)</p>
                            <Link to="/dimension/1" className="btn btn-primary w-100 mt-3"  >Basado en la empresa</Link>
                            <Link to="/dimension/2" className="btn btn-primary w-100 mt-3"  >Basado en el empleo</Link>
                            <Link to="/dimension/3" className="btn btn-primary w-100 mt-3"  >Basado en la riqueza</Link>
                        </div>
                    </div>
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
                </div>   
            </main>

            <Footer/>


        </div>
    )
}

<h4 className="mb-3 mt-3"><b>Categoría: </b></h4>
{categorias.map(categoria=>(
<Link to={ "/dimension/"+ categoria } className="btn btn-primary w-100 mt-3"  >{categoria}</Link>
))}