import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";





const TodayAssistenceListItem = ({ assistance, row,subject,onSelectGrade }) => {

  

    const [excuseFieldIsEnabled, setExcuseFieldEnabled] = useState(true)
    const [notes,setNotes] = useState(assistance.asistencia.notes);

  

    console.log(excuseFieldIsEnabled)

    console.log(assistance.asistencia.length)

  
    const onChangeAssistenceStatus = (event)=>{
    

        const selectedValue = event.target.value

        if(selectedValue !== "default"){

            assistance.asistencia.status= selectedValue

            console.log(assistance.asistencia.status)
        } 
        
        
        if( selectedValue==="E"){


            setExcuseFieldEnabled(true);
        }





        setExcuseFieldEnabled(false);

      



    }

    const onChangeNote=(event)=>{
        setNotes(event.target.value)
    }


    useEffect(()=>{

    },[excuseFieldIsEnabled])




    


    return (


        <tr>
            <th scope="row">{row}</th>
            <th>{assistance.nombre}</th>

            <th>
             
             <select className="custom-select" onChange={onChangeAssistenceStatus}>

                {
                    assistance.asistencia? 
                    <option  value ="default" selected>Seleccione una Opcion..</option>:
                    <option value="default">Seleccione una Opcion..</option>
                    

                    
                    
                }

                {
                    assistance.asistencia.status==='P' ? 
                    <option value="P" selected >P</option>
                    :<option value="P">P</option>
                    

                }
                
                {
                    assistance.asistencia.status==='A' ? 
                    <option  value="A" selected>A</option>
                    :<option value="A">A</option>
                    

                }


                {
                    assistance.asistencia.status==='E' ? 
                    <option  value="E" selected>E</option>
                    :<option value="E">E</option>
                    

                }


             </select>

             


            
            </th>


            <th>
                {
                     excuseFieldIsEnabled ? 
                    <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="" value={notes}  onChange={onChangeNote}></input>:
                    <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="" disabled></input>
                     
                }
            
             </th>


             <th>
                {
                     excuseFieldIsEnabled  ? 
                    <button className="btn btn-warning" onClick={() => {}}>Actualizar</button>:
                    <button className="btn btn-warning" onClick={() => {}} disabled>Actualizar</button>
                     
                }
            
             </th>

        </tr>

    );

}

export default TodayAssistenceListItem;