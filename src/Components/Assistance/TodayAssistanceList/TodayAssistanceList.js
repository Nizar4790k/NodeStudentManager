import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";

import { useNavigate } from "react-router";
import TodayAssistenceListItem from "./TodayAssistanceListItem/TodayAssistanceListItem";


const TodayAssistanceList = (props) => {

    const [assistance, setAssistance] = useState([]);
    


    const { user, onSignOut, loadUser,onSelectGrade } = props;

    

   
    const fetchAssistance = async () => {

        

        const response = await fetch(`${process.env.REACT_APP_SERVER}/grades?date=${new Date().toISOString().split('T')[0]}`);
        const assistance = await response.json();
        console.log(assistance)
        setAssistance(assistance)
       

    }

    useEffect( () => {

        
        fetchAssistance()
        


    }, []);


    


    




    return (
        <div>

            <NavBar onSignOut={onSignOut} selectedTab="TodayAsistanceList" loadUser={loadUser} />
            <h1>Lista de Calificaciones</h1>

            <div className="container">
                <br />
                <br />


                
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
                            <th scope="col">{"Estado de Asistencia"}</th>
                            <th scope="col">{"Nota"}</th>

                        </tr>
                    </thead>
                    <tbody>

                        {assistance.map((assistance, row) => {

                            return <TodayAssistenceListItem assistance={assistance} key={row + 1} row={row + 1} fetchAssistance={fetchAssistance}  onSelectGrade={onSelectGrade} />
                        })}




                    </tbody>
                </table>

            </div>

       
    );

}

export default TodayAssistanceList;