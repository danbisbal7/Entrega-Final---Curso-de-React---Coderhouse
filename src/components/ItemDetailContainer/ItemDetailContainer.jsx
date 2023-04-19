import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getFirestore, doc, getDoc } from "firebase/firestore"

export const ItemDetailContainer = () => { 
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const productoRef = doc(db, 'products', id);

    getDoc(productoRef)
      .then((doc) => {
        if (doc.exists()) {
          setProducto({ id: doc.id, ...doc.data() });
        } else {
          console.log("No existe el documento");
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [id]);

  return producto ? <ItemDetail producto={producto} /> : null;
}