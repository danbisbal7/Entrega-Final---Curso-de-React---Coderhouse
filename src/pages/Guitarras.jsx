import React from "react";
import { ProductsData } from "../json";
import { ItemListContainer } from "../components";

export const Guitarras = () => {
  const guitarras = ProductsData.filter((item) => item.categoria === "Guitarras");
  return (
      <div>
        <ItemListContainer category="Guitarras" />
      </div>
      
  )
}
