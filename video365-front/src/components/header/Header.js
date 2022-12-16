import { useEffect } from "react";
import logo from "../../assets/img/video365.png";
import { isAuth } from "../../util/Util";
import { TopMenu } from "../menu/TopMenu";
import "./Header.css";

export const Header = () => {
useEffect(() => {}, []);
    return (
        <div>
            <div className="flex text-center">
                <img src={logo} alt="logo video365.png"/>
                <h1>Bienvenido a Video365</h1>
                <h2>Hecho por cinefilos para cinefilos</h2>
            </div>
            {isAuth() ? <TopMenu /> : ""}
        </div>
    );
};