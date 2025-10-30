import React from "react";

const ListaUsuarios = ({ usuario, usuarios, setlistaActualizada }) => {
  const handleDelete = (id) => {
    const opciones = {
      method: "DELETE",
    };
    fetch("http://localhost:3006/usuarios/" + id, opciones)
      .then((res) => res.json())
      .then((res) => console.log(res));
    setlistaActualizada(true);
  };
  const handleUpdate = (id) => {
    //Validacion
    if (
      usuario.nombre === "" ||
      usuario.email === "" ||
      usuario.contrasena === "" ||
      usuario.rol === ""
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }
    const opciones = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    };
    fetch("http://localhost:3006/usuarios/" + id, opciones)
      .then((res) => res.json())
      .then((res) => console.log(res));
    setlistaActualizada(true);
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Contraseña</th>
          <th>Rol</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario) => (
          <tr key={usuario.id_usuario}>
            <td>{usuario.id_usuario}</td>
            <td>{usuario.nombre}</td>
            <td>{usuario.email}</td>
            <td>{usuario.contrasena}</td>
            <td>{usuario.rol}</td>
            <td>
              <div className="mb-3">
                <button
                  onClick={() => handleDelete(usuario.id_usuario)}
                  className="btn btn-danger"
                >
                  Borrar
                </button>
              </div>
              <div className="mb-3">
                <button
                  onClick={() => handleUpdate(usuario.id_usuario)}
                  className="btn btn-dark"
                >
                  Actualizar
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaUsuarios;
