import React from "react";
import { ProductsData } from "../json";
import { ItemListContainer } from "../components";

export const Pedales = () => {
  const pedales = ProductsData.filter((item) => item.categoria === "Pedales");
  return (
      <div>
        <ItemListContainer category="Pedales" />
      </div>
      
  )
}
