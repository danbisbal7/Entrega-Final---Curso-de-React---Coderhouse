import React from 'react';
import { ThemeProvider, CartProvider } from './context';
import "./components/NavBar/NavBarComponents"
import './App.module.css';
import './index.css';
import "./components/ItemDetailContainer"
import { MainRoutes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <ThemeProvider>
      <CartProvider>
        <MainRoutes />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;