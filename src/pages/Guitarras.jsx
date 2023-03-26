import React from "react";
import { ProductsData } from "../json";
import { Cards } from "../components";

export const Guitarras = () => {
    return (
        <div className="Guitarras">
            {ProductsData.map((producto) => (
      <Cards key={producto.id} producto={producto} />
    ))}
  </div>
  )
}
