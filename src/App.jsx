import React from 'react';
import "./components/NavBar/NavBarComponents"
import './App.module.css';
import { ItemListContainer } from './components/ItemListContainer';
import { MainRoutes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function App() {
  return (
    <div>
      <MainRoutes />
      <ItemListContainer/>
    </div>
  );
}

export default App;
