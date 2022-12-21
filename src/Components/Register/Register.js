import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./Register.css";


const Register = () => {

    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            navigate('/ProductList')
        }

    }, [])

    const sendForm = () => {



        if (!email || !password || !fullName) {
            alert("The fields can't be empty");
            return;
        }

        const validateEmail = (email) => {

            const regex = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
            return regex.test(email)

        }

        if (!validateEmail(email)) {
            alert("Email not valid!");
            return;
        }





        fetch(`${process.env.REACT_APP_SERVER}/register`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password,
                fullName: fullName
            })
        })
            .then(response => response.json())
            .then(result => {

                switch (result) {
                    case "USER_EXIST":
                        alert("The user exist");
                        break;
                    case "USER_INSERTED":
                        alert("User created suscessfully")
                        //navigate("/Login");
                        break;
                    case "EMPTY_FIELDS":
                        alert("The field(s) can't be empty");
                        break;
                    default:
                        alert("ERROR IN THE SERVER");
                        break;
                }
            });

    }


    const onFullNameChange = (e) => {
        setFullName(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }




    return (


        <div className="wrapper">

            <div className="form-signin" >
                <h1 className="form-signin-heading">Bienvenidos a Node Student Manager!</h1>
                <h4 >Por favor registrese</h4>

                <input type="text" id="fullname" className="form-control" name="fullname" placeholder="Nombre completo" autoFocus="" onChange={onFullNameChange} />
                <br></br>

                <input type="text" id="email" className="form-control" name="email" placeholder="Email" onChange={onEmailChange} autoFocus="" />
                <br></br>


                <input type="password" id="password" className="form-control" name="password" placeholder="Contraseña" onChange={onPasswordChange} required />

                <br></br>
                <button className="btn btn-lg btn-success btn-block" onClick={() => { sendForm() }}>Registrarse</button>

                <br></br>
                <br></br>
                <button type="button" className="btn btn-link" onClick={() => { navigate("/Login") }}>Iniciar Sesion</button>

            </div>


        </div>





    );

}



export default Register;