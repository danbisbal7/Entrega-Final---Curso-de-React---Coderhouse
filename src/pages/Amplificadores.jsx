import React from "react";
import { ProductsData } from "../json";
import { ItemListContainer } from "../components";

export const Amplificadores = () => {
  const amplificadores = ProductsData.filter((item) => item.categoria === "Amplificadores");
  return (
      <div>
        <ItemListContainer category="Amplificadores" />
      </div>
      
  )
}