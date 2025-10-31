import React from "react";

const Formulario = ({ usuario, setUsuario }) => {
  const handleChange = (evento) => {
    setUsuario({ ...usuario, [evento.target.name]: evento.target.value });
    console.log(usuario);
  };

  //let { nombre, email, contraseña, rol } = usuario;
  const handleSubmit = () => {
    console.log(usuario);
    //Validacion
    if (
      usuario.nombre === "" ||
      usuario.email === "" ||
      usuario.contrasena === "" ||
      usuario.rol === ""
    ) {
      alert("Todos los campos son obligatorios para crear un nuevo registro");
      return;
    }
    //consulta
    const opciones = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    };
    fetch("http://localhost:3006/usuarios", opciones)
      .then((res) => res.json())
      .then((res) => console.log(res));

    setUsuario({
      id_usuario: "",
      nombre: "",
      email: "",
      contrasena: "",
      rol: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="usuario" className="form-label">
          Usuario
        </label>
        <input
          name="nombre"
          onChange={handleChange}
          type="text"
          id="usuario"
          className="form-control"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          name="email"
          onChange={handleChange}
          type="text"
          id="email"
          className="form-control"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="contraseña" className="form-label">
          Contraseña
        </label>
        <input
          name="contrasena"
          onChange={handleChange}
          type="text"
          id="contrasena"
          className="form-control"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="rol" className="form-label">
          Rol
        </label>
        <input
          name="rol"
          onChange={handleChange}
          type="text"
          id="rol"
          className="form-control"
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};

export default Formulario;
