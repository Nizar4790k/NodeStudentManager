import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import StudentItem from "../StudentItem/StudentItem";
import { useNavigate } from "react-router";
import "./StudentList.css";


const StudentList = (props) => {

    const [students, setStudents] = useState([]);

    const { user, onSignOut,onSelectStudent,loadUser} = props;

    const navigate = useNavigate();

    //loadUser(navigate)

    /*
    const students = [
    {name:"Manzana Roja",price:10},
    {name:"Coca Cola",price:15},
    {name:"Pan",price:5},
    {name:"Pica Pollo",price:200}
    ]
    */


    useEffect( () => {

        fetchStudents()
        

    }, []);


    const fetchStudents = async () => {

        const response = await fetch(`${process.env.REACT_APP_SERVER}/students`);
        const students = await response.json();
        setStudents(students)

    }


    const goToCreateStudent = () => {
        navigate('/StudentFormCreate');
    }



    return (
        <div>

            <NavBar onSignOut={onSignOut} selectedTab="StudentList" loadUser={loadUser} />
            <h1>Lista de productos</h1>

            <div className="container">
                <br />
                <br />
                <button type="button" className="btn btn-success btn-lg" onClick={goToCreateStudent}>Agregar Estudiante</button>
                <br />
                <br />
                <table className="table table-striped table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Fecha Nacimiento(yyyy-mm-dd)</th>
                            <th scope="col">Sexo</th>
                        </tr>
                    </thead>
                    <tbody>

                        {students.map((student, row) => {
                            console.log(student);
                            return <StudentItem student={student} key={row + 1} row={row + 1} fetchStudents={fetchStudents} onSelectStudent={onSelectStudent} />
                        })}




                    </tbody>
                </table>

            </div>

        </div>
    );

}

export default StudentList;