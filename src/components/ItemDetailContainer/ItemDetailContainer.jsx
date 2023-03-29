import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsData } from '../../json';
import ItemDetail from './ItemDetail';

export const ItemDetailContainer = () => { 
  const { id } = useParams();
  const [productoEncontrado, setProductoEncontrado] = useState(null);

  useEffect(() => {
    const productoEncontrado = ProductsData.find((prod) => prod.id == id);
    setProductoEncontrado(productoEncontrado);
  }, [id]);

  return productoEncontrado ? <ItemDetail producto={productoEncontrado} /> : null;
}