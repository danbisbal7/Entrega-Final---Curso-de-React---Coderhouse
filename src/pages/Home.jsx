import { Link } from "react-router-dom";
import { ItemListContainer } from "../components";

export const Home = () => {
  return (
    <div>
      <h1>Bienvenido a The House of The Guitar</h1>
      <ItemListContainer category="Todos los productos" />
      <Link to="/Guitarras">Ver todos los productos</Link>
    </div>
  );
};