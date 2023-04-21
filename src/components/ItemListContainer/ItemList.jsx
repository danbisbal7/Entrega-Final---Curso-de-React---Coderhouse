import React from 'react'
import "./ItemListContainer.css"
import Item from './Item';

// Aca se hace el enlace hacia el Item especifico


export function ItemList({ items }) {
    return (
        <div className= "ItemList">
        {items.map((producto) => (          
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    );
}