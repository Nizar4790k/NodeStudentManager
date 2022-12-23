import React from "react";
import { useNavigate } from "react-router";





const GradeItem = ({ grade, row ,fetchStudents,onSelectStudent}) => {

    const navigate = useNavigate();

    const goToStudentFormUpdate = () => {
      navigate("/StudentFormUpdate");
      console.log(student);
      onSelectStudent(student)
    };

    return (

        <tr>
            <th scope="row">{row}</th>
            <td>{grade.nombre}</td>
            <td>{}</td>
            <td>{student.sexo}</td>
            <td>
                <button className="btn btn-warning" onClick={() => {goToStudentFormUpdate()}}>Actualizar</button>
            </td>
        </tr>

    );

}

export default GradeItem;