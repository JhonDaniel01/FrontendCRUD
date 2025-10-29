import React from "react";

const ListaUsuarios = ({ usuarios }) => {
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
            <th>{usuario.id_usuario}</th>
            <th>{usuario.nombre}</th>
            <th>{usuario.email}</th>
            <th>{usuario.contrasena}</th>
            <th>{usuario.rol}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaUsuarios;
