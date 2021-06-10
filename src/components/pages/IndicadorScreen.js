import React from "react";
import { DescriptionGeneral } from "../commons/DescriptionGeneral";
import { FilterGeneral } from "../commons/FilterGeneral";
import { Navbar } from "../commons/NavBar";
import { Bar } from "react-chartjs-2";
import { Footer } from "../commons/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';


export const IndicadorScreen =  ()  => {
  let { id } = useParams();

  const { indicadoresList, citySelected, yearSelected }= useSelector( state => state.indicadores);
  const { descripcionesList } = useSelector(state => state.descripciones);

  const onlyUnique= (value, index, self)=> { return self.indexOf(value) === index; };
  const colors= [ "#158A6F", "#069169", "#33A584","#158A6F", "#069169", "#33A584","#158A6F" ];

  // filtrando por indicador url
    let indicadoresByCodigo= indicadoresList.filter(indicador=> indicador.codigo === id).map(indicador=>{
         if(indicador.valor===-1) {
           indicador.valor='ND'
         }
         return indicador;
        });


  // listado de ciudades
    const listaCiudades = indicadoresByCodigo.map(indicador => indicador.ciudad).sort().filter( onlyUnique );
  // listado de ciudades
    const listaYears = indicadoresByCodigo.map(indicador => indicador.ano).sort().filter( onlyUnique );
  // filtrados por ciudad
    const indicadoresbyCity= indicadoresByCodigo.filter(indicador=> indicador.ciudad === citySelected); 
  // filtrados por Año
    const indicadoresbyYear= indicadoresByCodigo.filter(indicador=> indicador.ano === parseInt(yearSelected));  
  
  // filtro descripcion 
    const indicadorDescription= descripcionesList.filter(indicador=> indicador.codigo === id)[0]; 

  const data = {
    labels: indicadoresbyYear.map( indicador => indicador.ciudad),
    datasets: [
      {
        label: indicadorDescription['unidad-medida'] || "unidad de medida",
        data: indicadoresbyYear.map( indicador => indicador.valor),
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1
      }
    ]
  };


  const data2 = {
    labels: indicadoresbyCity.map(indicador=> indicador.ano),
    datasets: [
      {
        label: indicadorDescription['unidad-medida'] || "unidad de medida",
        data: indicadoresbyCity.map(indicador=> {return  indicador.valor}),
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1
      }
    ]
  };


const ceroTodos= indicadoresByCodigo.map( indicador=> indicador.valor).filter(indicador=>indicador.valor!='ND');
console.log(ceroTodos);


  return (
    <div>
      <Navbar />
      <main className="container pt-5">

      {ceroTodos.length===0?(
        <div className="alert-success p-5 m-5">
          <h1>Información actualmente no disponible</h1>
        </div>
      ):(
      <div>
        <p>Indicador {id}</p>
        <p>{indicadorDescription['dimension']}: {indicadorDescription['cat-m-teorico']}</p>
        <DescriptionGeneral indicador={ indicadorDescription } />
        <hr></hr>
        <FilterGeneral listaCiudades={listaCiudades} listaYears={listaYears} />
        
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="container-graphic">
              <Bar data={data} width={150} height={150} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="container-graphic">
              <Bar data={data2} width={150} height={150} />
            </div>  
          </div>
        </div>
      </div>        
      )}

      </main>
      <Footer/>
    </div>
  );
};
