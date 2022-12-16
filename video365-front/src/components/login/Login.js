import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import  Form from "react-boostrap/Form";
import { Link, useNavigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { API_URL} from "../../util/Util";

export const Login = ()=> {
    let useNavigate = useNavigate();

    useEffect(() => {
        checkLogin();
    }, [] );

    const checkLogin = () => {
        if (localStorage.getItem("authData")) {
            navigate("/movies");
        }
    };

    const [formData, setFormData] = useState({
        user: "",
        password: "",
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData((values) => ({ ...values, [name]: value }));
    };
    
    const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await sendAuthApi();

    if(response && response.token && response.token != "") {
        localStorage.setItem("authData", JSON.stringify(response));
        Navigate("/movies");
    } else {
        Swal.fire({
            title: "Error!",
            text: "Credenciales no validas",
            icon: "error",
            confirmButtonText: "Reintentar",
        });
    }
};

const sendAuthApi = async () => {
    const requestData = {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-type": "application/json",
        },
    };
    let response = await fetch(API_URL + "auth", requestData);
    response = await response.json();
    return response;
};




