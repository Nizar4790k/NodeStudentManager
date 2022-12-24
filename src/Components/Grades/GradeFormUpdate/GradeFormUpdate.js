import React from "react";
import { useNavigate } from "react-router";

const updateGrade = async (grade) => {
  

  
    if(grade.materias.espanol){
        grade.materias.espanol[0]= document.getElementById("primer-parcial").value;
        grade.materias.espanol[1]= document.getElementById("segundo-parcial").value;
        grade.materias.espanol[2]= document.getElementById("practicas-tareas").value;
        grade.materias.espanol[3]= document.getElementById("examen-final").value;

    } else if (grade.materias.matematicas){
        console.log(grade.materias.matematica)
        grade.materias.matematicas[0]= document.getElementById("primer-parcial").value;
        grade.materias.matematicas[1]= document.getElementById("segundo-parcial").value;
        grade.materias.matematicas[2]= document.getElementById("practicas-tareas").value;
        grade.materias.matematicas[3]= document.getElementById("examen-final").value;

    }else if (grade.materias.naturales){

        grade.materias.naturales[0]= document.getElementById("primer-parcial").value;
        grade.materias.naturales[1]= document.getElementById("segundo-parcial").value;
        grade.materias.naturales[2]= document.getElementById("practicas-tareas").value;
        grade.materias.naturales[3]= document.getElementById("examen-final").value;

    }else if(grade.materias.sociales){
        grade.materias.sociales[0]= document.getElementById("primer-parcial").value;
        grade.materias.sociales[1]= document.getElementById("segundo-parcial").value;
        grade.materias.sociales[2]= document.getElementById("practicas-tareas").value;
        grade.materias.sociales[3]= document.getElementById("examen-final").value;
    }
  




  const response = await fetch(`${process.env.REACT_APP_SERVER}/grades`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(grade),
  });

  console.log(response);

  if (response.status === 200) {
    alert("La calificacion fue actualizada correctamente");
  } else if (response.status===304) {
    alert("La calificacion no fue modificada");
  }else{
    alert("La calificacion no fue encontrada");
  }


};

const GradeFormUpdate = ({grade}) => {
    

    const nombreMateria = 
    grade.materias.espanol ? "Lengua Española": 
    grade.materias.matematicas ? "Matemáticas" : 
    grade.materias.sociales ? "Ciencias Sociales" : 
    "Ciencias Naturales"


    const subject = 
    grade.materias.espanol ? grade.materias.espanol: 
    grade.materias.matematicas ? grade.materias.matematicas : 
    grade.materias.sociales ?  grade.materias.sociales : 
    grade.materias.naturales


  const navigate = useNavigate();

  const goToGradeList = () => {
    navigate("/GradeList");
  };

  

  return (
      <div>
      <div className="form-horizontal">
        <h4>Actualizar Calificacion de Estudiante para la Materia {nombreMateria}</h4>
        <hr />

        <div className="form-group">
          <label>Nombre</label>
          <div className="col-md-10">
            <input type="text" id="nombre" className="form-control" value={grade.nombre}/>
          </div>
        </div>

        <br />

        <div className="form-group">
          <label>Primer parcial</label>
          <div className="col-md-10">
            <input type="text" id="primer-parcial" className="form-control" defaultValue={subject[0]}/>
          </div>
        </div>

        <div className="form-group">
          <label>Segundo Parcial</label>
          <div className="col-md-10">
            <input type="text" id="segundo-parcial" className="form-control" defaultValue={subject[1]}/>
          </div>
        </div>

        <div className="form-group">
          <label>Practicas y Tareas</label>
          <div className="col-md-10">
            <input type="text" id="practicas-tareas" className="form-control" defaultValue={subject[2]}/>
          </div>
        </div>

        <div className="form-group">
          <label>Examen Final</label>
          <div className="col-md-10">
            <input type="text" id="examen-final" className="form-control" defaultValue={subject[3]}/>
          </div>
        </div>


        <br />

   

        <br />

        

        <br />

        <br />
        <div>
          <div className="form-group">
            <div className="col-md-offset-2 col-md-10">
              <button
                value="Create"
                className="btn btn-success"
                onClick={()=>{updateGrade(grade)}}>
                Update
              </button>
            </div>
          </div>
        </div>

        <br />
        <br />
        <div>
          <button className="btn btn-danger" onClick={goToGradeList}>
            Volver a la lista
          </button>
        </div>
      </div>
    </div>
  );
};

export default GradeFormUpdate;