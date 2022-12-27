import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";

import { useNavigate } from "react-router";
import "./GradeList.css";
import GradeItem from "../GradeItem/GradeItem";


const GradeList = (props) => {

    const [grades, setGrades] = useState([]);
    const [subject,setSubject] = useState("Lengua Española")

    const { user, onSignOut, loadUser,onSelectGrade } = props;

    

   
    const fetchGrades = async () => {

        

        const response = await fetch(`${process.env.REACT_APP_SERVER}/grades?subject=${subject}`);
        const grades = await response.json();
        console.log(grades)
        setGrades(grades)
       

    }

    useEffect( () => {

        
        fetchGrades()
        


    }, [subject]);


    
    

    const onChangeSubject = (newSubject)=>{
        setSubject(newSubject)
    }

    




    return (
        <div>

            <NavBar onSignOut={onSignOut} selectedTab="GradeList" loadUser={loadUser} />
            <h1>Lista de Calificaciones</h1>

            <div className="container">
                <br />
                <br />



                <div className="dropdown">
                    <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {subject}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" onClick={()=>{onChangeSubject("Lengua Española")}}>Lengua Española</button>
                        <button className="dropdown-item" onClick={()=>{onChangeSubject("Matemáticas")}}>Matemáticas</button>
                        <button className="dropdown-item" onClick={()=>{onChangeSubject("Ciencias Naturales")}}>Ciencias Naturales</button>
                        <button className="dropdown-item" onClick={()=>{onChangeSubject("Ciencias Sociales")}}>Ciencias Sociales</button>
                        
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <table className="table table-striped table-bordered table-hover table-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">{"Primer Parcial (20pts)"}</th>
                            <th scope="col">{"Segundo Parcial (20pts)"}</th>
                            <th scope="col">{"Tareas o Practicas (30pts)"}</th>
                            <th scope="col">{"Examen Final (30pts)"}</th>
                            <th scope="col">{"Total"}</th>
                            <th scope="col">{"Literal"}</th>
                            <th scope="col">{"Acciones"}</th>
                        </tr>
                    </thead>
                    <tbody>

                        {grades.map((grade, row) => {

                            return <GradeItem grade={grade} key={row + 1} row={row + 1} fetchGrades={fetchGrades} subject={subject} onSelectGrade={onSelectGrade} />
                        })}




                    </tbody>
                </table>

            </div>

        </div>
    );

}

export default GradeList;