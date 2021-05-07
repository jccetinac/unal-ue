import React from "react";
import { DescriptionGeneral } from "../commons/DescriptionGeneral";
import { FilterGeneral } from "../commons/FilterGeneral";
import { Navbar } from "../commons/NavBar";
import { DetailsGeneral } from "../commons/DetailsGeneral";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Footer } from "../commons/Footer";

export const IndicadorScreen = () => {
  const data = {
    labels: ["Bogota", "Medellin", "Cali", "Pereira", "Ibague", "Otra"],
    datasets: [
      {
        label: "personas",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
  };

  const data2 = {
    labels: ["2017", "2018", "2019", ],
    datasets: [
      {
        label: "personas",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)"
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div>
      <Navbar />

      <main className="container pt-5">
        <h1>Indicador</h1>
        <DescriptionGeneral /><FilterGeneral />
        
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
      </main>
      <Footer/>
    </div>
  );
};
