import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsData } from '../../json';
import ItemDetail from './ItemDetail';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

export const ItemDetailContainer = () => { 
  const { id } = useParams();
  const [productoEncontrado, setProductoEncontrado] = useState(null);

  /*useEffect(() => {
    const productoEncontrado = ProductsData.find((prod) => prod.id == id);
    setProductoEncontrado(productoEncontrado);
  }, [id]);*/

  useEffect(() => {
    const db = getFirestore();
    console.log(db);
    const productsRef = collection(db, "products");
    const queryRef = query(productsRef, where("id", "==", id));
    console.log(id);

    getDocs(queryRef)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const producto = doc.data();
          console.log(producto);
          setProductoEncontrado(producto);
        });
      })
      .catch((error) => {
        console.log("Error al obtener los datos: ", error);
      });
  }, [id]);

  return productoEncontrado ? <ItemDetail producto={productoEncontrado} /> : null;
}