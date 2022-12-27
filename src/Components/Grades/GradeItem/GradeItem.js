import React, { useState } from "react";
import { useNavigate } from "react-router";




const GradeItem = ({ grade, row,onSelectGrade }) => {

    const navigate = useNavigate();

    const subject = grade.materias.espanol ? grade.materias.espanol:
                grade.materias.matematicas ?  grade.materias.matematicas :
                grade.materias.sociales ?   grade.materias.sociales:
                grade.materias.naturales
                


    const goToGradeFormUpdate = (selectedGrade) => {
        console.log(selectedGrade)
        navigate("/GradeFormUpdate");
        onSelectGrade(selectedGrade)
      };


    const getLetter= (number)=>{
        if(number>=90 && number<=100){
            return 'A'
        }else if(number>=80 && number<=89){
            return 'B'
        }else  if( number>=70 && number<=79){
            return 'C'
        }else if(number>=0 && number<=69){
            return 'F'
        }
    }

    const  sum = subject.reduce((acumulator,index)=>parseInt(acumulator) + parseInt(index),0)

   
    return (



        
        

        <tr>
            <th scope="row">{row}</th>
            <td>{grade.nombre}</td>
           
            {
              
            
                 subject.map((calificacion,key)=><td key={key}>{calificacion}</td>)
                 

            }

            {
                <td>{sum}</td>
            }
            
            {
                <td>{getLetter(sum)}</td>
            }
               
            
           
            
            <td>
                <button className="btn btn-warning" onClick={() => {goToGradeFormUpdate(grade)}}>Actualizar</button>
            </td>
        </tr>

    );

}

export default GradeItem;