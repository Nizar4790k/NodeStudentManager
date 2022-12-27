import React from "react";
import { useNavigate } from "react-router";



const StudentFormUpdate = ({student}) => {
  

  const navigate = useNavigate();

  const goToStudentList = () => {
    navigate("/StudentList");
  };

  const updateStudent = async (student) => {
    const campoNombre = document.getElementById("nombre");
    const campoFechaNacimiento = document.getElementById("fecha-nacimiento");
    
  
    student.nombre = campoNombre.value;
    student.fechaNacimiento = campoFechaNacimiento.value;
    student.sexo = document.getElementById('sexo-masculino-radio').checked ? "Masculino":"Femenino"
    
  
   
    
  
  
    const response = await fetch(`${process.env.REACT_APP_SERVER}/students`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
  
      body: JSON.stringify(student),
    });
  
    
  
    if (response.status === 200) {
      alert("El estudiante fue actualizado correctamente");
      goToStudentList();
    } else if (response.status===304) {
      alert("El estudiante no fue modificado");
    }else{
      alert("El estudiante no fue encontrado");
    }
  
  
  };

  return (
      <div>
      <div className="form-horizontal">
        <h4>Actualizar Estudiante</h4>
        <hr />

        <div className="form-group">
          <label>Nombre</label>
          <div className="col-md-10">
            <input type="text" id="nombre" className="form-control" defaultValue={student.nombre}/>
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
              defaultValue={student.fechaNacimiento}
              
            />
          </div>
        </div>

        <br />

        <div className="form-group">
          <label>Sexo</label>

         

          <div className="col-md-10">
            
          


            
            <div className="form-check form-check-inline">
              
              {
                student.sexo==="Masculino" ?  
                <input
                className="form-check-input"
                type="radio"
                name="sexo"
                id="sexo-masculino-radio"
                value="Masculino"
                defaultChecked
              />: 
              
              <input
              className="form-check-input"
              type="radio"
              name="sexo"
              id="sexo-masculino-radio"
              value="Masculino"
              />
              }

              
             
              <label className="form-check-label" htmlFor="sexo-masculino-radio">
                Masculino
              </label>
            </div>

            <div className="form-check form-check-inline">
              
              {
                student.sexo==="Femenino" ? 
                <input
                className="form-check-input"
                type="radio"
                name="sexo"
                id="sexo-femenino-radio"
                value="Femenino"
                defaultChecked
              />
                :
                <input
                className="form-check-input"
                type="radio"
                name="sexo"
                id="sexo-femenino-radio"
                value="Femenino"
              />
              }
             
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
                onClick={()=>{updateStudent(student)}}>
                Update
              </button>
            </div>
          </div>
        </div>

        <br />
        <br />
        <div>
          <button className="btn btn-danger" onClick={goToStudentList}>
            Volver a la lista
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentFormUpdate;
