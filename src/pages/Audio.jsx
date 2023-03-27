import React from "react";
import { ProductsData } from "../json";
import { ItemListContainer } from "../components";

export const Audio = () => {
  const audio = ProductsData.filter((item) => item.categoria === "Audio");
  return (
      <div>
        <ItemListContainer category="Audio" />
      </div>
      
  )
}
