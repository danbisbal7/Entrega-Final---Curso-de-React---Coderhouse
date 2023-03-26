import React from "react";
import styles from './ItemListContainer.css';

export const ItemListContainer = ({ props }) => {
    return (
      <div className={styles.container}>
        <h2>{props}</h2>
      </div>
    );
  };

/*import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';


export function ItemListContainer({ category }) {
  const [items, setItems] = useState([]);
  

  useEffect(() => {
    // Lógica para obtener los datos de la categoría
    const categoryItems = (category);

    // Actualiza el estado con los datos de la categoría
    setItems(categoryItems);
  }, [category]);

  return (
    <div>
      <h2>{category}</h2>
      <ItemList items={items} />
    </div>
  );
}

function ItemList({ items }) {
  return (
    <div className="card-deck">
      {items.map((item) => (
        <Card key={item.id}>
          <Card.Img variant="top" src={item.imageUrl} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button variant="primary" href={`/item/${item.id}`}>Ver Detalles</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

function Guitarras() {
  return <ItemListContainer category="Guitarras" />;
}

function Bajos() {
  return <ItemListContainer category="Bajos" />;
}*/


