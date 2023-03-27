import { Link } from "react-router-dom";
import { ItemListContainer } from "../components";
import styles from "./pages.css"

export const Home = () => {
  return (
    <div className={styles.title}>
      <h1 className="titulo">Bienvenido a The House of The Guitar</h1>
    </div>
  );
};

/* <ItemListContainer category="Todos los productos" />
      <Link to="/Guitarras">Ver todos los productos</Link>*/