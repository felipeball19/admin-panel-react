function Clientes() {
    return (
      <div>
        <h1>Sección de Clientes</h1>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Registrar Cliente</h5>
                <p className="card-text">Agrega nuevos clientes al sistema.</p>
              </div>
            </div>
          </div>
  
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Lista de Clientes</h5>
                <p className="card-text">Visualiza y administra los clientes existentes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Clientes;
  
  