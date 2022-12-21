import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import StudentItem from "../StudentItem/StudentItem";
import { useNavigate } from "react-router";
import "./StudentList.css";


const StudentList = (props) => {

    const [products, setProducts] = useState([]);

    const { user, onSignOut } = props;

    const navigate = useNavigate();

    /*
    const products = [
    {name:"Manzana Roja",price:10},
    {name:"Coca Cola",price:15},
    {name:"Pan",price:5},
    {name:"Pica Pollo",price:200}
    ]
    */


    useEffect(async () => {

        const products = await getProducts();
        console.log(products);
        setProducts(products);

    }, []);


    const getProducts = async () => {

        const response = await fetch(`${process.env.REACT_APP_SERVER}/students`);
        const products = await response.json();

        return products;

    }


    const goToCreateProduct = () => {
        navigate('/StudentFormCreate');
    }



    return (
        <div>

            <NavBar fullName={user.fullName} onSignOut={onSignOut} selectedTab="StudentList" />
            <h1>Lista de productos</h1>

            <div className="container">
                <br />
                <br />
                <button type="button" className="btn btn-success btn-lg" onClick={goToCreateProduct}>Agregar Producto</button>
                <br />
                <br />
                <table className="table table-striped table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>

                        </tr>
                    </thead>
                    <tbody>

                        {products.map((product, row) => {
                            console.log(product);
                            return <StudentItem product={product} key={row + 1} row={row + 1} />
                        })}




                    </tbody>
                </table>

            </div>

        </div>
    );

}

export default StudentList;