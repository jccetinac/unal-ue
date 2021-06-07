import React from 'react';
import { Navbar } from '../commons/NavBar';
import { Footer } from '../commons/Footer';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const IndicadoresScreen = () => {

    const { descripcionesList } = useSelector( state => state.descripciones);
    const onlyUnique= (value, index, self)=> { return self.indexOf(value) === index; };


    const desempenoList = descripcionesList.filter(indicador=> indicador.dimension==='Desempeño empresarial').map(indicador => indicador['cat-m-teorico']).filter(cat=> cat !== undefined).filter( onlyUnique );
    const determinantesList = descripcionesList.filter(indicador=> indicador.dimension==='Determinante').map(indicador => indicador['cat-m-teorico']).filter(cat=> cat !== undefined).filter( onlyUnique );
    const impactoList = descripcionesList.filter(indicador=> indicador.dimension==='Impacto').map(indicador => indicador['cat-m-teorico']).filter(cat=> cat !== undefined).filter( onlyUnique );

console.log(impactoList);

    return (
        <div className="journal__main-content">
            
            <Navbar />

            <main className="main container p-5">  
                <h1>Dimensiones</h1>  
               
                <div className="bg-indicadores desktop">
                    <div className="section bg-primary-2">
                        <h3 className="p-1 pb-4 pt-4 vertical-text-2 bg-primary text-white">Emprendimiento </h3>
                    </div>
                    <div className="section bg-primary-3">
                        <h3 className="p-1 pb-4 pt-4 vertical-text-2 bg-primary text-white">Empresa </h3>
                    </div>
                </div>

                <div className="ml-3 pt-5">
                        <div className="row">
                    <div className="col-md-4">
                        <div className="card p-4">
                            <h4 className="mb-3 mt-3"><b>Insumos:</b></h4>
                            <p>determinates del emprendimiento</p>

                            { determinantesList.length !=0 ? (
                                determinantesList.map(categoria=>(
                                    <Link to={ "/dimension/"+ categoria } className="btn btn-primary w-100 mt-3"  >{categoria}</Link>))
                            ): 
                            (
                                <>
                                <Link  to="/dimension/cultura y capital humano" className="btn btn-light text-gray w-100 mt-3"  >Cultura y capital humano</Link>
                                <Link  to="/dimension/acceso afinanciamiento" className="btn btn-light text-gray w-100 mt-3"  >Acceso afinanciamiento</Link>
                                <Link  to="/dimension/redes" className="btn btn-light text-gray w-100 mt-3"  >Redes</Link>
                                <Link  to="/dimension/marco regulatorio e institucionalidad" className="btn btn-light text-gray w-100 mt-3"  >Marco regulatorio e institucionalidad</Link>
                                <Link  to="/dimension/industria de soporte" className="btn btn-light text-gray w-100 mt-3"  >Industria de soporte</Link>
                                <Link  to="/dimension/innovación y desarrollo tecnológico" className="btn btn-light text-gray w-100 mt-3"  >Innovación y desarrollo tecnológico</Link>
                                </>
                            ) }

                            
                        </div>
                        
                    </div>


                    <div className="col-md-4">
                        <div className="card p-4">
                             <h4 className="mb-3 mt-3"><b>Desempeño: </b></h4>
                             <p>desempeño empresarial a nivel micro</p>
                                {desempenoList.map(categoria=>(
                                <Link to={ "/dimension/"+ categoria } className="btn btn-primary w-100 mt-3"  >{categoria}</Link>
                                ))} 
                        </div>
                    </div>



                    <div className="col-md-4">
                        <div className="card p-4">
                            <h4 className="mb-3 mt-3"><b>Impacto:</b></h4>
                            <p>desempeño empresarial (a nivel macro)</p>

                            { impactoList.length != 0 ? (
                                impactoList.map(categoria=>(
                                    <Link to={ "/dimension/"+ categoria } className="btn btn-primary w-100 mt-3"  >{categoria}</Link>))
                            ): 
                            (
                                <>
                                <Link to="/dimension/empleo" className="btn btn-light text-gray w-100 mt-3"  >Empleo</Link>
                                <Link to="/dimension/formalidad"  className="btn btn-light text-gray w-100 mt-3"  >Formalidad</Link>
                                <Link to="/dimension/productividad" className="btn btn-light text-gray w-100 mt-3"  >Productividad</Link>
                                <Link to="/dimension/crecimiento económico" className="btn btn-light text-gray w-100 mt-3"  >Crecimiento económico</Link>
                                </>
                            )}
                            
                        </div>
                    </div>  
                </div>    
               </div>
                <div className="bg-primary text-white mt-2 indicadores-footer">
                    <h3 className="text-center p-2">Emprendedor <i className="fas fa-angle-double-right"></i></h3>
                </div>
            
            </main>

            <Footer/>

        </div>
    )
}

