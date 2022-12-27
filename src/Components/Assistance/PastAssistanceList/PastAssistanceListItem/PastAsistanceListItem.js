import React, { useState } from "react";
import { useNavigate } from "react-router";




const AssistenceListItem = ({ assistance, row,subject,onSelectGrade }) => {

    const navigate = useNavigate();

  
    console.log(assistance);


try{
    return (

    

        
        <tr>
        <th scope="row">{row}</th>
        <th>{assistance.nombre}</th>

        

        <th>{assistance.asistencia.status}</th>
        <th>{assistance.asistencia.notes}</th>
         </tr>

        
     
    );

}catch(err){
    return (<tr></tr>)
}
        



  

}

export default AssistenceListItem;