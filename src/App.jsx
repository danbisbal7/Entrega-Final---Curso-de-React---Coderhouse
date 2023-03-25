import React from 'react';
import "./components/NavBar/NavBarComponents"
import './App.module.css';
import { NavBarComponent } from './components/NavBar/NavBarComponents';
import { ItemListContainer } from './components/ItemListContainer';
import { MainRoutes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// Codigo de la clase 

/*async function getUsers() {
  return await fetch(`https://reqres.in/api/users?page=2`)
  .then(res => res.json())
  .then(data => console.log(data.data))
}

const userData = {
  "name": "morpheus",
  "job": "leader"
}

async function postUser() {
  await fetch(`https://reqres.in/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })
  .then(res => res.json())
  .then(data => console.log(data))
}*/
// termina aca

function App() {
  return (
    <div>
      <NavBarComponent />
      <MainRoutes />
      <ItemListContainer props="Bienvenidos a House of The Guitar" />
    </div>
  );
}

export default App;
