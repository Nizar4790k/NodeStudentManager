import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import NavBar from "../../NavBar/NavBar";

const updateGrade = async (grade) => {
  

    const primerParcial = document.getElementById("primer-parcial").value;
    const segundoParcial = document.getElementById("segundo-parcial").value;
    const practicasYtareas = document.getElementById("practicas-tareas").value;
    const examenFinal = document.getElementById("examen-final").value;

  
    if(grade.materias.espanol){
        grade.materias.espanol[0]= primerParcial
        grade.materias.espanol[1]= segundoParcial
        grade.materias.espanol[2]= practicasYtareas
        grade.materias.espanol[3]= examenFinal

    } else if (grade.materias.matematicas){
        console.log(grade.materias.matematica)
        grade.materias.matematicas[0]= primerParcial
        grade.materias.matematicas[1]= segundoParcial
        grade.materias.matematicas[2]= practicasYtareas
        grade.materias.matematicas[3]= examenFinal

    }else if (grade.materias.naturales){

        grade.materias.naturales[0]= primerParcial
        grade.materias.naturales[1]= segundoParcial
        grade.materias.naturales[2]= practicasYtareas
        grade.materias.naturales[3]= examenFinal

    }else if(grade.materias.sociales){
        grade.materias.sociales[0]= primerParcial;
        grade.materias.sociales[1]= segundoParcial
        grade.materias.sociales[2]= practicasYtareas
        grade.materias.sociales[3]= examenFinal
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




const GradeFormUpdate = ({grade,onSignOut,loadUser}) => {
    

  

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


    const [primerParcial,setPrimerParcial] = useState(subject[0])
    const [segundoParcial,setSegundoParcial] = useState(subject[1])
    const [practicasYtareas,setPracticasYtareas] = useState(subject[2])
    const [examenFinal,setExamenFinal] = useState(subject[3])
   

  const navigate = useNavigate();

  const goToGradeList = () => {
    navigate("/GradeList");
  };




  

  return (
      <div>
      <NavBar onSignOut={onSignOut} selectedTab="GradeList" loadUser={loadUser} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="form-horizontal">
        <h4>Actualizar Calificacion de Estudiante para la Materia {nombreMateria}</h4>
        <hr />

        <div className="form-group">
          <label>Nombre</label>
          <div className="col-md-10">
            <input type="text" id="nombre" className="form-control" value={grade.nombre} readOnly/>
          </div>
        </div>

        <br />

        <div className="form-group">
          <label>Primer parcial</label>
          <div className="col-md-10">
            {
              primerParcial>=0 && primerParcial<=20 ?
              <input type="number" id="primer-parcial" className="form-control is-valid" min="0" max="20" defaultValue={primerParcial} onChange={(event)=>{setPrimerParcial(parseInt(event.target.value))}}/>
              :<input type="number" id="primer-parcial" className="form-control is-invalid" min="0" max="20" defaultValue={primerParcial} onChange={(event)=>{setPrimerParcial(parseInt(event.target.value))}}/>
            }

            {
               primerParcial>=0 && primerParcial<=20 ? 
               <div class="valid-feedback">
                  Dentro del Rango
              </div>
               :
               <div class="invalid-feedback">
                  El rango a calificar es de 0 a 20
              </div>
              
            }
           
          </div>
        </div>

        <div className="form-group">
          <label>Segundo Parcial</label>
          <div className="col-md-10">
            {
              segundoParcial >=0 && segundoParcial<=20 ?
              <input type="number" id="segundo-parcial" className="form-control is-valid" min="0" max="20" defaultValue={segundoParcial} onChange={(event)=>{setSegundoParcial(parseInt(event.target.value))}}/>
              :<input type="number" id="segundo-parcial" className="form-control is-invalid" min="0" max="20" defaultValue={segundoParcial} onChange={(event)=>{setSegundoParcial(parseInt(event.target.value))}}/>
            }

            {
               segundoParcial>=0 && segundoParcial<=20 ? 
               <div class="valid-feedback">
                  Dentro del Rango
              </div>
               :
               <div class="invalid-feedback">
                  El rango a calificar es de 0 a 20
              </div>
              
            }
           
          </div>
        </div>

        <div className="form-group">
          <label>Tareas o Practicas</label>
          <div className="col-md-10">
            {
              practicasYtareas >=0 && practicasYtareas<=30 ?
              <input type="number" id="practicas-tareas" className="form-control is-valid" min="0" max="30" defaultValue={practicasYtareas} onChange={(event)=>{setPracticasYtareas(parseInt(event.target.value))}}/>
              :<input type="number" id="practicas-tareas" className="form-control is-invalid" min="0" max="30" defaultValue={practicasYtareas} onChange={(event)=>{setPracticasYtareas(parseInt(event.target.value))}}/>
            }

            {
               practicasYtareas>=0 && practicasYtareas<=30 ? 
               <div class="valid-feedback">
                  Dentro del Rango
              </div>
               :
               <div class="invalid-feedback">
                  El rango a calificar es de 0 a 30
              </div>
              
            }
           
          </div>
        </div>

        <div className="form-group">
          <label>Examen Final</label>
          <div className="col-md-10">
            {
              examenFinal >=0 && examenFinal<=30 ?
              <input type="number" id="examen-final" className="form-control is-valid" min="0" max="30" defaultValue={examenFinal} onChange={(event)=>{setExamenFinal(parseInt(event.target.value))}}/>
              :<input type="number" id="examen-final
              " className="form-control is-invalid" min="0" max="30" defaultValue={examenFinal} onChange={(event)=>{setExamenFinal(parseInt(event.target.value))}}/>
            }

            {
               segundoParcial>=0 && segundoParcial<=30 ? 
               <div class="valid-feedback">
                  Dentro del Rango
              </div>
               :
               <div class="invalid-feedback">
                  El rango a calificar es de 0 a 30
              </div>
              
            }
           
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
          <div className="form-group">
            <div className="col-md-offset-2 col-md-10">
              {
               (primerParcial>=0 && primerParcial<=20) &&
               (segundoParcial>=0 && segundoParcial<=20) &&
               (practicasYtareas>=0 && practicasYtareas<=30) &&
               (examenFinal>=0 && examenFinal<=30)
                ?  <button
                value="Create"
                className="btn btn-success"
                onClick={()=>{updateGrade(grade)}}>
                Update
              </button> :<button
                value="Create"
                className="btn btn-success"
                disabled
                >
                Update
              </button>
              }
            
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