import { db } from "../firebase/firebase-config";

export const loadDescripciones= async () => {

   const descripcionesSnap = await db.collection(`/descripciones`).get();

   const descripciones = [];
   descripcionesSnap.forEach( snapChild => {
        descripciones.push({
            id: snapChild.id,
            ...snapChild.data()
        });
   }); 

   return descripciones;
}