import React from 'react';
import "./components/NavBar/NavBarComponents"
import './App.module.css';
import { NavBarComponent } from './components/NavBar/NavBarComponents';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBarComponent />
      <ItemListContainer props="Bienvenidos a House of The Guitar" />
    </div>
  );
}

export default App;
