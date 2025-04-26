function Usuarios() {
  return (
    <div>
      <h1>Sección de Usuarios</h1>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Registrar Usuario</h5>
              <p className="card-text">Crea nuevas cuentas de usuario en el sistema.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Lista de Usuarios</h5>
              <p className="card-text">Administra los usuarios existentes y sus roles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usuarios;
