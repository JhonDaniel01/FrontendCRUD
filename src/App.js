import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ListaUsuarios from "./components/ListaUsuarios";
import Formulario from "./components/formulario";
function App() {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    const getUsuarios = () => {
      fetch("http://localhost:3006/usuarios")
        .then((res) => res.json())
        .then((res) => setUsuarios(res));
    };
    getUsuarios();
  }, []);

  return (
    <Fragment>
      <Navbar brand="Usuarios"></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h2 style={{ textAlign: "center" }}>Formulario Usuarios</h2>
            <Formulario></Formulario>
          </div>
          <div className="col-7">
            <h2 style={{ textAlign: "center" }}>Lista de usuarios</h2>
            <ListaUsuarios usuarios={usuarios} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
