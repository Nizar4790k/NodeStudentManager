import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";





const TodayAssistenceListItem = ({ assistance, row, subject, onSelectGrade }) => {



    const [excuseFieldIsEnabled, setExcuseFieldEnabled] = useState(false)
    const [notes, setNotes] = useState(assistance.asistencia.notes);




    console.log(assistance);



    const onChangeAssistenceStatus = (event) => {



        const selectedValue = event.target.value



        if (selectedValue !== "default") {

            assistance.asistencia.status = selectedValue

        }


        if (selectedValue === "E") {


            setExcuseFieldEnabled(true);

            return;
        } else {

            assistance.asistencia.notes = ""
            setNotes("")
        }





        setExcuseFieldEnabled(false);

        updateAssistance()





    }

    const onChangeNote = (event) => {
        setNotes(event.target.value)
    }


    useEffect(() => {

    }, [excuseFieldIsEnabled])



    const updateAssistance = async () => {


        assistance.asistencia.notes = notes





        const response = await fetch(`${process.env.REACT_APP_SERVER}/assistance`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },

            body: JSON.stringify(assistance),
        });

        console.log(response);

        if (response.status === 200) {
            alert("La asistencia fue actualizada correctamente");
        } else if (response.status === 304) {
            alert("La asistencia no fue modificada");
        } else {
            alert("La asistencia no fue encontrada");
        }


    }








    return (


        <tr>
            <th scope="row">{row}</th>
            <th>{assistance.nombre}</th>

            <th>
                <div className="form-row align-items-center">
                    <div className="col-sm-3">

                        <select className="custom-select" onChange={onChangeAssistenceStatus}>

                            {
                                assistance.asistencia.status === '' ?
                                    <option value="default" >Seleccione una Opcion..</option> :
                                    <option value="default" selected>Seleccione una Opcion..</option>




                            }

                            {
                                assistance.asistencia.status === 'P' ?
                                    <option value="P" selected >P</option>
                                    : <option value="P">P</option>


                            }

                            {
                                assistance.asistencia.status === 'A' ?
                                    <option value="A" selected>A</option>
                                    : <option value="A">A</option>


                            }


                            {
                                assistance.asistencia.status === 'E' ?
                                    <option value="E" selected>E</option>
                                    : <option value="E">E</option>


                            }


                        </select>

                    </div>


                </div>








            </th>


            <th>
               
                     <div className="form-row align-items-center">
                        <div className="col-auto">
                        {
                                assistance.asistencia.status === 'E' || excuseFieldIsEnabled ?
                                <input type="text" className="form-control mb-2 mr-sm-2" id="text-excuse" placeholder="" defaultValue={notes} onChange={onChangeNote}></input> :
                                <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="" disabled></input>
                        }
                        </div>
                     </div>
                    
                  

              

            </th>


            <th>
                {
                    assistance.asistencia.status === 'E' || excuseFieldIsEnabled ?
                        <button className="btn btn-warning" onClick={() => { updateAssistance() }}>Actualizar</button> :
                        <button className="btn btn-warning" onClick={() => { }} disabled>Actualizar</button>

                }

            </th>

        </tr>

    );

}

export default TodayAssistenceListItem;