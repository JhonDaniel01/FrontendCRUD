import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ListaUsuarios from "./components/ListaUsuarios";
import Formulario from "./components/formulario";
function App() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    contrasena: "",
    rol: "",
  });
  const [listaActualizada, setlistaActualizada] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    const getUsuarios = () => {
      fetch("http://localhost:3006/usuarios")
        .then((res) => res.json())
        .then((res) => setUsuarios(res));
    };
    getUsuarios();
    setlistaActualizada(false);
  }, [listaActualizada]);

  return (
    <Fragment>
      <Navbar brand="Usuarios"></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2 style={{ textAlign: "center" }}>Formulario Usuarios</h2>
            <Formulario usuario={usuario} setUsuario={setUsuario} />
          </div>
          <div className="col-8">
            <h2 style={{ textAlign: "center" }}>Lista de usuarios</h2>
            <ListaUsuarios
              usuario={usuario}
              usuarios={usuarios}
              setlistaActualizada={setlistaActualizada}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
