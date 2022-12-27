import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import StudentItem from "../StudentItem/StudentItem";
import { useNavigate } from "react-router";
import "./StudentList.css";


const StudentList = (props) => {

    const [students, setStudents] = useState([]);
    const [studentName, setStudentName] = useState("")

    const { onSignOut, onSelectStudent, loadUser } = props;

    const navigate = useNavigate();




    useEffect(() => {

        fetchStudents()


    }, []);


    const fetchStudents = async () => {

        const response = await fetch(`${process.env.REACT_APP_SERVER}/students`);
        const students = await response.json();
        setStudents(students)

    }


    const fetchStudentsByName = async () => {

        const response = await fetch(`${process.env.REACT_APP_SERVER}/students?nombre=${studentName}`);
        const students = await response.json();
        setStudents(students)

    }

    useEffect(() => {
        fetchStudentsByName()

    }, [studentName])



    const goToCreateStudent = () => {
        navigate('/StudentFormCreate');
    }

    const onInputChange = (event) => {
        setStudentName(event.target.value)
    }


    return (
        <div>

            <NavBar onSignOut={onSignOut} selectedTab="StudentList" loadUser={loadUser} />
            <h1>Lista de Estudiantes</h1>
            <div className="container">

                <br />
                <br />

                <div className="col-6">
                    <input className="form-control  mb-2 mr-sm-2" type="text" placeholder="Buscar estudiante por nombre" aria-label="" onChange={onInputChange}></input>
                </div>

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
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {students.map((student, row) => {
                            return <StudentItem student={student} key={row + 1} row={row + 1} fetchStudents={fetchStudents} onSelectStudent={onSelectStudent} />
                        })}




                    </tbody>
                </table>

            </div>

        </div>
    );

}

export default StudentList;