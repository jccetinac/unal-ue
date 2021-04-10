import { db } from "../firebase/firebase-config";

export const loadIndicadores = async () => {


   console.log('ingreso a indicadores');
   const indicadoresSnap = await db.collection(`/indicadores`).get();

   const indicadores = [];
   indicadoresSnap.forEach( snapChild => {
        indicadores.push({
            id: snapChild.id,
            ...snapChild.data()
        });
   }); 
   console.log(indicadores);
   return indicadores;
}