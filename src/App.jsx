import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider, CartProvider } from './context';
import "./components/NavBar/NavBarComponents"
import './App.module.css';
import './index.css';
import "./components/ItemDetailContainer"
import { ItemListContainer } from './components/ItemListContainer';
import { MainRoutes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const {isDarkMode} = useContext(ThemeContext);
  console.log(isDarkMode);

  return (
    <ThemeProvider>
      <CartProvider>
        <MainRoutes />
        <ItemListContainer/>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;