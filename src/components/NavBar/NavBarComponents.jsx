import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context';
import { Link } from 'react-router-dom';
import styles from "./NavBarStyles.module.css";
import {FaGuitar} from "react-icons/fa";
import {GiGuitarHead} from "react-icons/gi";
import { SearchBar } from "./SearchBar";
import { CartIcon } from "./CartIcon";
import NavItems from "./NavItems";
import { Button } from 'react-bootstrap';
import { MdNightlightRound, MdWbSunny } from "react-icons/md";

// Este componente representa todo lo que se muestra en el header, el titulo con enlace al home, el searchbar, el icono del cart y el boton de modo oscuro

export const NavBarComponent = () => {
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  
    const toggleDarkMode = () => {
        setIsDarkMode(prevIsDarkMode => !prevIsDarkMode);
        console.log(isDarkMode);
      }
      
      useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
          body.classList.add('dark-mode');
        } else {
          body.classList.remove('dark-mode');
        }
      }, [isDarkMode]);

    const icon = isDarkMode ? <MdNightlightRound/> : <MdWbSunny />;
  
    return (
      <header>
        <div className={styles.title}>
          <Link to="/">
            <h1>{<FaGuitar/>} House of The Guitar {<GiGuitarHead/>}</h1>
          </Link>
          <SearchBar/>
          <CartIcon/>
          <Button variant="dark" onClick={toggleDarkMode} className="darkModeButton" style={{width: 40}}>{icon}</Button>
        </div>
        <div className={`${styles.options} ${isDarkMode ? styles.darkModeOptions : ''}`}>
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