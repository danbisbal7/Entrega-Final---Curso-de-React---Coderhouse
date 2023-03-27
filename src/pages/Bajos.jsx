import React from "react";
import { ProductsData } from "../json";
import { ItemListContainer } from "../components";

export const Bajos = () => {
  const bajos = ProductsData.filter((item) => item.categoria === "Bajos");
  return (
      <div>
        <ItemListContainer category="Bajos" />
      </div>
      
  )
}
