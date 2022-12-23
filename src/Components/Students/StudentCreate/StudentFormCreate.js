import React from "react";
import { useNavigate } from "react-router";

const createStudent = async () => {
  const campoNombre = document.getElementById("nombre");
  const campoFechaNacimiento = document.getElementById("fecha-nacimiento");
  

  const nombre = campoNombre.value;
  const fechaNacimiento = campoFechaNacimiento.value;
  const sexo = document.getElementById('sexo-masculino-radio').checked ? "Masculino": "Femenino"
  console.log(sexo);

  const student = { nombre: nombre, fechaNacimiento: fechaNacimiento,sexo:sexo };

  const response = await fetch(`${process.env.REACT_APP_SERVER}/students`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(student),
  });

  console.log(response);

  if (response.status === 200) {
    alert("El estudiante fue insertado correctamente");
  } else {
    alert("Error al insertar estudiante");
  }

  campoNombre.value = "";
  campoFechaNacimiento.value = "";
};

const StudentFormCreate = () => {
  const navigate = useNavigate();

  const goTostudentList = () => {
    navigate("/studentList");
  };

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
          <label>Fecha de Nacimiento</label>
          <div className="col-md-10">
            <input
              type="date"
              id="fecha-nacimiento"
              name="fecha-nacimiento"
              className="form-control"
            />
          </div>
        </div>

        <br />

        <div className="form-group">
          <label>Sexo</label>

          <div className="col-md-10">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="sexo"
                id="sexo-masculino-radio"
                value="Masculino"
                checked
              />
              <label className="form-check-label" htmlFor="sexo-masculino-radio">
                Masculino
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="sexo"
                id="sexo-femenino-radio"
                value="Femenino"
              />
              <label className="form-check-label" htmlFor="sexo-femenino-radio">
                Femenino
              </label>
            </div>
          </div>
          <br />
        </div>

        <br />

        <br />
        <div>
          <div className="form-group">
            <div className="col-md-offset-2 col-md-10">
              <button
                value="Create"
                className="btn btn-success"
                onClick={createStudent}
              >
                Create
              </button>
            </div>
          </div>
        </div>

        <br />
        <br />
        <div>
          <button className="btn btn-danger" onClick={goTostudentList}>
            Volver a la lista
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentFormCreate;
