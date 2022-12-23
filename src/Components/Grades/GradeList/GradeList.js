import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";

import { useNavigate } from "react-router";
import "./GradeList.css";
import GradeItem from "../GradeItem/GradeItem";


const GradeList = (props) => {

    const [grades, setGrades] = useState([]);
    const [subject,setSubject] = useState("Lengua Española")

    const { user, onSignOut, onSelectStudent, loadUser } = props;

    const navigate = useNavigate();




    useEffect(() => {

        //fetchGrades()


    }, [subject]);


    const fetchGrades = async () => {

        const response = await fetch(`${process.env.REACT_APP_SERVER}/grades?subject=${subject}`);
        const grades = await response.json();
        setGrades(grades)

    }

    const onChangeSubject = (subject)=>{
        setSubject(subject)
    }




    return (
        <div>

            <NavBar onSignOut={onSignOut} selectedTab="GradeList" loadUser={loadUser} />
            <h1>Lista de Calificaciones</h1>

            <div className="container">
                <br />
                <br />


                <div class="dropdown">
                    <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {subject}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" onClick={()=>{onChangeSubject("Lengua Española")}}>Lengua Española</button>
                        <button className="dropdown-item" onClick={()=>{onChangeSubject("Matemáticas")}}>Matematicas</button>
                        <button className="dropdown-item" onClick={()=>{onChangeSubject("Ciencias Naturales")}}>Ciencias Naturales</button>
                        <button className="dropdown-item" onClick={()=>{onChangeSubject("Ciencias Sociales")}}>Ciencias Sociales</button>
                        
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <table className="table table-striped table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Primer Parcial</th>
                            <th scope="col">Segundo Parcial</th>
                            <th scope="col">Tareas o Practicas</th>
                            <th scope="col">Examen Final</th>
                        </tr>
                    </thead>
                    <tbody>

                        {grades.map((grades, row) => {

                            return <GradeItem grades={grades} key={row + 1} row={row + 1} fetchGrades={fetchGrades} onSelectStudent={onSelectStudent} />
                        })}




                    </tbody>
                </table>

            </div>

        </div>
    );

}

export default GradeList;