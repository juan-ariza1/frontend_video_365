import { Navigate } from "react-router-dom";

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