import React from 'react';
import "./components/NavBar/NavBarComponents"
import './App.module.css';
import "./components/ItemDetailContainer"
import { ItemListContainer } from './components/ItemListContainer';
import { MainRoutes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <MainRoutes />
      <ItemListContainer/>
    </div>
  );
}

export default App;
