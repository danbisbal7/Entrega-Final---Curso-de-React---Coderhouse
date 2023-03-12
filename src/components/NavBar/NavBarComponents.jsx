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
                        <NavItems label="Home" src="#" />
                        <NavItems label="Guitarras" src="#" />
                        <NavItems label="Bajos" src="#" />
                        <NavItems label="Percusion" src="#" />
                        <NavItems label="Amplificadores" src="#" />
                        <NavItems label="Pedales" src="#" />
                        <NavItems label="Audio" src="#" />
                    </ul>
                </nav>
            </div>
        </header>
    )
}
