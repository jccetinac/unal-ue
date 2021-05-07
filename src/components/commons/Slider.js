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
               <h3 className="display-5">CONOZCA LA ESTRUCTURACIÓN DE UN INSTRUMENTO PERIÓDICO DE MEDICIÓN DEL EMPRENDIMIENTO PARA COLOMBIA</h3>
           </div>
           <div className="col-md-6">
           <img src="/img/portada1.png" className="img-fluid" />
           </div>
       </div>
      </div>

      <div className="item p-5">
       <div className="row">
           <div className="col-md-6">
               <p className="mt-5 text-justify">La Batería de indicadores es un instrumento fundamental para lograr cumplir con los objetivos específicos del Conpes, ya que, este instrumento permite medir la actividad emprendedora del país en todas sus dimensiones y permitirá fortalecer, mejorar o crear, desde la política pública, medidas que sean coherentes con las necesidades de los emprendedores. Adicionalmente, la Batería permitirá hacer seguimiento a la evolución del emprendimiento y así generar propuestas de apoyo e incentivos institucionales.</p>
           </div>
           <div className="col-md-6">
           <img src="/img/portada1.png" className="img-fluid" />
           </div>
       </div>
      </div>

    </Slider>
  );
}