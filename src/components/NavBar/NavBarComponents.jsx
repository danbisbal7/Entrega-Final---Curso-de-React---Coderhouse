import { Link } from 'react-router-dom';
import styles from "./NavBarStyles.module.css";
import {FaGuitar} from "react-icons/fa";
import {GiGuitarHead} from "react-icons/gi";
import { SearchBar } from "./SearchBar";
import { CartIcon } from "./CartIcon";
import NavItems from "./NavItems";

export const NavBarComponent = () => {
    return (
        <header>
            <div className={styles.title}>
            <Link to="/">
                <h1>{<FaGuitar/>} House of The Guitar {<GiGuitarHead/>}</h1>
            </Link>
                <SearchBar/>
                <CartIcon/>
            </div>
            <div className={styles.options}>
                <nav>
                    <ul>
                        <NavItems label="Home" to="/" />
                        <NavItems label="Guitarras" to="/Guitarras" />
                        <NavItems label="Bajos" to="/Bajos" />
                        <NavItems label="Percusion" to="/Percusion" />
                        <NavItems label="Amplificadores" to="/Amplificadores" />
                        <NavItems label="Pedales" to="/Pedales" />
                        <NavItems label="Audio" to="/Audio" />
                    </ul>
                </nav>
            </div>
        </header>
    )
}
