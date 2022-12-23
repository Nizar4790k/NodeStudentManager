import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const NavBar = ({ onSignOut, selectedTab }) => {

    const [fullName,setFullName] = useState('')

    const navigate = useNavigate();


    

    

      useEffect(()=>{const loadUser = () =>{
    
        const user = JSON.parse(sessionStorage.getItem("user"))
        console.log(user)
        if(user){
          
            if(fullName!=user.fullName){
                setFullName(user.fullName)
            }
            console.log(user.fullName)
            
          
        }else{
          navigate('/Login')
        }
        
      }
      loadUser()
    },[fullName])

    return (
        <header className="header">

            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">

                    <Link to="/StudentList" className="navbar-brand">Node Student Manager</Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav mr-auto">

                            {
                                selectedTab === "StudentList" ?
                                    <li className="nav-item active"><Link to="/StudentList" className="nav-link">Estudiantes</Link></li>
                                    : <li className="nav-item"><Link to="/StudentList" className="nav-link">Estudiantes</Link></li>

                            }
                            
                            {
                                selectedTab === "GradeList" ?
                                <li className="nav-item active"><Link to="/StudentList" className="nav-link">Calificaciones</Link></li>
                                : <li className="nav-item"><Link to="/StudentList" className="nav-link">Calificaciones</Link></li>
                            }
                           



                        </ul>

                        <ul className="navbar-nav">
                            <li className="nav-item"><p className="nav-link" href="#">{fullName}</p></li>

                            <li className="nav-item"> <button type="button" id="signout" className="btn btn-danger" onClick={() => {

                                navigate("/Login");
                                onSignOut();

                            }}>Cerrar sesión</button></li>
                        </ul>


                    </div>


                </nav>
            </div>
        </header>


    );
}


export default NavBar;