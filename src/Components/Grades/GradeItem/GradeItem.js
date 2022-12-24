import React, { useState } from "react";
import { useNavigate } from "react-router";




const GradeItem = ({ grade, row,subject,onSelectGrade }) => {

    const navigate = useNavigate();

  



    const goToGradeFormUpdate = (selectedGrade) => {
        console.log(selectedGrade)
        navigate("/GradeFormUpdate");
        onSelectGrade(selectedGrade)
      };


    return (



        
        

        <tr>
            <th scope="row">{row}</th>
            <td>{grade.nombre}</td>
           
            {
              
            
                 grade.materias.espanol ? grade.materias.espanol.map((calificacion,key)=><td key={key}>{calificacion}</td>):
                 grade.materias.matematicas ? grade.materias.matematicas.map((calificacion,key)=><td key={key}>{calificacion}</td>):
                 grade.materias.sociales ? grade.materias.sociales.map((calificacion,key)=><td key={key}>{calificacion}</td>):
                 grade.materias.naturales ?grade.materias.naturales.map((calificacion,key)=><td key={key}>{calificacion}</td>):
                <td></td>

              

                    
                
                

            }

              
               
            
           
            
            <td>
                <button className="btn btn-warning" onClick={() => {goToGradeFormUpdate(grade)}}>Actualizar</button>
            </td>
        </tr>

    );

}

export default GradeItem;