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
                <h1>{<FaGuitar/>} House of The Guitar {<GiGuitarHead/>}</h1>
                <SearchBar/>
                <CartIcon/>
            </div>
            <div className={styles.options}>
                <nav>
                    <ul>
                        <NavItems label="Home" src="/" />
                        <NavItems label="Guitarras" src="/Guitarras" />
                        <NavItems label="Bajos" src="/Bajos" />
                        <NavItems label="Percusion" src="/Percusion" />
                        <NavItems label="Amplificadores" src="/Amplificadores" />
                        <NavItems label="Pedales" src="/Pedales" />
                        <NavItems label="Audio" src="/Audio" />
                    </ul>
                </nav>
            </div>
        </header>
    )
}
