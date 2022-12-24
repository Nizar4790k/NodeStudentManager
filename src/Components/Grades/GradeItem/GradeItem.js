import React from "react";




const GradeItem = ({ grade, row ,}) => {

    

    return (


        

        <tr>
            <th scope="row">{row}</th>
            <td>{grade.nombre}</td>
           
            {
                
                

                 grade.materias.espanol ? grade.materias.espanol.map((calificacion,key)=><td>{calificacion}</td>):
                 grade.materias.matematicas ? grade.materias.matematicas.map((calificacion)=><td>{calificacion}</td>):
                 grade.materias.sociales ? grade.materias.sociales.map((calificacion)=><td>{calificacion}</td>):
                 grade.materias.naturales ?grade.materias.naturales.map((calificacion)=><td>{calificacion}</td>):
                 <td></td>
                 
                 
                 

            }

              
               
            
           
            
            <td>
                <button className="btn btn-warning" onClick={() => {console.log("Actualizando calificaciones")}}>Actualizar</button>
            </td>
        </tr>

    );

}

export default GradeItem;