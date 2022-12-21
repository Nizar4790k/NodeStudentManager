import React from 'react';
import { useNavigate } from "react-router";

const createProduct = async () => {

  const campoNombre = document.getElementById("nombre");
  const campoEdad = document.getElementById("edad");


  const nombre = campoNombre.value;
  const edad = campoEdad.value;

  const product = { nombre: nombre, edad: edad };

  const response = await fetch(`${process.env.REACT_APP_SERVER}/products`, {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({ nombre: nombre, edad: edad })
  });

  console.log(response);

  if (response.status === 200) {
    alert("El producto fue insertado correctamente");

  } else {
    alert("Error al insertar producto");
  }

  campoNombre.value = "";
  campoEdad.value = "";


}

const StudentFormCreate = () => {

  const navigate = useNavigate();

  const goToProductList = () => {
    navigate('/ProductList');

  }

  return (
    <div>
      <div className="form-horizontal">
        <h4>Crear Estudiante</h4>
        <hr />

        <div className="form-group">
          <label>Nombre</label>
          <div className="col-md-10">
            <input type="text" id="nombre" className="form-control" />
          </div>
        </div>

        <br />

        <div className="form-group">
          <label>Edad</label>
          <div className="col-md-10">
            <input type="text" id="edad" className="form-control" />
          </div>
        </div>

        <br />


        <br />
        <div>
          <div className="form-group">
            <div className="col-md-offset-2 col-md-10">
              <button value="Create" className="btn btn-success" onClick={createProduct}>Create</button>
            </div>
          </div>
        </div>

        <br />
        <br />
        <div>
          <button className='btn btn-danger' onClick={goToProductList}>Volver a la lista</button>
        </div>
      </div>
    </div>
  );
};



export default StudentFormCreate;