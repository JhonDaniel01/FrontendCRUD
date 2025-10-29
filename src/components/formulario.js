import React from "react";

const Formulario = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="id" className="form-label">
          Id
        </label>
        <input type="text" id="id" className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="usuario" className="form-label">
          Usuario
        </label>
        <input type="text" id="usuario" className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="text" id="email" className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="contraseña" className="form-label">
          Contraseña
        </label>
        <input type="text" id="contraseña" className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="rol" className="form-label">
          Rol
        </label>
        <input type="text" id="rol" className="form-control"></input>
      </div>
      <button className="btn btn-primary">Guardar</button>
    </form>
  );
};

export default Formulario;
