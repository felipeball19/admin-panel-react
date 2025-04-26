function Home() {
    return (
      <div className="text-center">
        <h1>Bienvenido al Panel Administrativo</h1>
        <p className="lead">Gestiona clientes, proveedores y usuarios de manera rápida y sencilla.</p>
  
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Clientes</h5>
                <p className="card-text">Administra la información de tus clientes de forma eficiente.</p>
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Proveedores</h5>
                <p className="card-text">Controla proveedores y abastecimiento de productos.</p>
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Usuarios</h5>
                <p className="card-text">Gestiona las cuentas de usuarios del sistema administrativo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  