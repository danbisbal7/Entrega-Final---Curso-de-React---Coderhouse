import styles from "./NavBarStyles.module.css";

export const SearchBar = () => {
    return (
        <form className= {styles.form}>
            <input type="text" placeholder="Buscar" />
            <button type="submit">Buscar</button>
        </form>
    )
}