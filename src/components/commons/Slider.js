import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className="carrusel">
      <div className="item p-5">
       <div className="row">
           <div className="col-md-6">
               <h3 className="display-5 mt-4">
                  Observatorio de emprendimiento e instrumentos de medición para Colombia 
               </h3>
           </div>
           <div className="col-md-6">
           <img src="/img/portada1.png" className="img-fluid" />
           </div>
       </div>
      </div>

      <div className="item p-5">
       <div className="row">
           <div className="col-md-6">
               <p className="mt-5 text-justify">
                  <b>Normativa reciente Gobierno Nacional: </b>
                  <br></br>
                  Conpes No. 4011 : Generar condiciones habilitantes en el ecosistema emprendedor para la creación, sostenibilidad y crecimiento de emprendimientos que contribuyan a la generación de ingresos, riqueza y aumentos en la productividad e internacionalización empresarial
                  <br></br>
                  Ley de emprendimiento 2069 del 31 dic 2020: 
                  Establecer un marco regulatorio que propicie el emprendimiento y el crecimiento, consolidación y sostenibilidad de las empresas, con el fin de aumentar el bienestar social y generar equidad. Dicho marco delineará un enfoque regionalizado de acuerdo a las realidades socioeconómicos de cada región
              </p>
           </div>
           <div className="col-md-6">
           <img src="/img/portada1.png" className="img-fluid" />
           </div>
       </div>
      </div>

    </Slider>
  );
}