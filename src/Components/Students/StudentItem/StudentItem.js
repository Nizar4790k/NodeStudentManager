import React from "react";

const deleteStudent = async (_id) => {



    const response = await fetch(`${process.env.REACT_APP_SERVER}/estudiante`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: _id })
    });

    if (response.status === 200) {
        alert("Estudiante eliminado con exito");
    }

}

const StudentItem = ({ product, row }) => {

    return (

        <tr>
            <th scope="row">{row}</th>
            <td>{product.nombre}</td>
            <td>{product.precio}</td>
            <td><button className="btn btn-danger" onClick={() => { deleteStudent(product._id) }}>Eliminar</button></td>
        </tr>

    );

}

export default StudentItem;