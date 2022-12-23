import React from "react";
import { useNavigate } from "react-router";

const deleteStudent = async (_id,fetchStudents) => {



    const response = await fetch(`${process.env.REACT_APP_SERVER}/students`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: _id })
    });

    if (response.status === 200) {
        alert("Estudiante eliminado con exito");
    }

    await fetchStudents()

}



const StudentItem = ({ student, row ,fetchStudents,onSelectStudent}) => {

    const navigate = useNavigate();

    const goToStudentFormUpdate = () => {
      navigate("/StudentFormUpdate");
      console.log(student);
      onSelectStudent(student)
    };

    return (

        <tr>
            <th scope="row">{row}</th>
            <td>{student.nombre}</td>
            <td>{student.fechaNacimiento}</td>
            <td>{student.sexo}</td>
            <td>
                <button className="btn btn-danger" onClick={() => { deleteStudent(student._id,fetchStudents)}}>Eliminar</button>
                <button className="btn btn-warning" onClick={() => {goToStudentFormUpdate()}}>Actualizar</button>
            </td>
        </tr>

    );

}

export default StudentItem;