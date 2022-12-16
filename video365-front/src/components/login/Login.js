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
    
    



}
