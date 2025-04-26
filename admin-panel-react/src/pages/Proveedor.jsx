function Proveedor() {
    return (
      <div>
        <h1>Sección de Proveedores</h1>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Agregar Proveedor</h5>
                <p className="card-text">Crea registros para nuevos proveedores.</p>
              </div>
            </div>
          </div>
  
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Lista de Proveedores</h5>
                <p className="card-text">Gestiona la información de tus proveedores.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Proveedor;
  
  