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
               <h3>Title</h3>
               <p>texto de descripcion texto de descripcion 
                texto de descripcion texto de descripcion texto de 
                descripcion texto de descripcion texto de descripcion texto de descripcion 
                texto de descripcion texto de descripcion texto de descripcion texto de 
                descripcion </p>
           </div>
           <div className="col-md-6">
           <img src="https://picsum.photos/500/500" className="img-fluid" />
           </div>
       </div>
      </div>

      <div className="item p-5">
       <div className="row">
           <div className="col-md-6">
               <h3>Title2</h3>
               <p>texto de descripcion texto de descripcion 
                texto de descripcion texto de descripcion texto de 
                descripcion texto de descripcion texto de descripcion texto de descripcion 
                texto de descripcion texto de descripcion texto de descripcion texto de 
                descripcion </p>
           </div>
           <div className="col-md-6">
           <img src="https://picsum.photos/500/500" className="img-fluid" />
           </div>
       </div>
      </div>
    </Slider>
  );
}