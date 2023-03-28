import { ItemListContainer } from "../components";
import styles from "./pages.css"

export const Home = () => {
  return (
    <div className={styles.title}>
      <h2 className="titulo">Bienvenido a The House of The Guitar!</h2>
      <ItemListContainer category=""/>
    </div>
  );
};
