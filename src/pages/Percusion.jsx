import React from "react";
import { ProductsData } from "../json";
import { ItemListContainer } from "../components";

export const Percusion = () => {
  const percusion = ProductsData.filter((item) => item.categoria === "Perscusion");
  return (
      <div>
        <ItemListContainer category="Percusion" />
      </div>
      
  )
}
