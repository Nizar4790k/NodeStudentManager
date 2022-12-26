import React, { useState } from "react";
import { useNavigate } from "react-router";




const AssistenceListItem = ({ assistance, row,subject,onSelectGrade }) => {

    const navigate = useNavigate();

  
    


    return (


        <tr>
            <th scope="row">{row}</th>
            <th>{assistance.nombre}</th>
            <th>{assistance.asistencia.status}</th>
            <th>{assistance.asistencia.notes}</th>

        </tr>

    );

}

export default AssistenceListItem;