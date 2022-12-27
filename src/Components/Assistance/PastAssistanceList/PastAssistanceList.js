import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";

import { useNavigate } from "react-router";
import AssistenceListItem from "../AssistanceListItem/AsistanceListItem";


const PastAssistanceList = (props) => {

    const [assistance, setAssistance] = useState([]);
    const [selectedDate,setSelectedDate] = useState(new Date().toISOString().split('T')[0])


    const { user, onSignOut, loadUser } = props;

    

    const fetchAssistance = async () => {

        

        const response = await fetch(`${process.env.REACT_APP_SERVER}/assistance?date=${selectedDate}`);
        const assistance = await response.json();

        console.log(assistance)
        
        setAssistance(assistance)

        
       

    }

    useEffect( () => {

        
        fetchAssistance()
        


    }, [selectedDate]);


    
    const onChangeDate = (event)=>{
        console.log(event.target.value)

        setSelectedDate(event.target.value)
        

    }



    
    




    return (
        <div>

            <NavBar onSignOut={onSignOut} selectedTab="Lista de Asistencia" loadUser={loadUser} />
            <h1>Lista de Asistencia por Fechas</h1>

            <div className="container">
                <br />
                <br />

                <div className="form-group">
                    <label>Fecha del Pase de Lista</label>
                    <div className="col-md-4">
                    <input
                    type="date"
                    id="fecha-asistencia"
                    name="fecha-asistencia"
                    className="form-control"
                    defaultValue={selectedDate}
                    onChange={onChangeDate}
                    
            />
          </div>
        </div>

                
                </div>
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
                            console.log(assistance)

                            return <AssistenceListItem assistance={assistance} key={row + 1} row={row + 1} />
                        })}




                    </tbody>
                </table>

            </div>

       
    );

}

export default PastAssistanceList;