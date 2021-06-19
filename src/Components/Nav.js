import React from 'react';
import { Images } from '../Constant/Images';
import "./../css/Nav.css";

const Nav = () => {
    return (
        <div className="Navbar">
            <div className="n-logo">
                <img src={Images.Logo} alt="" />
            </div>
            <div className="direccionar">
                <div className="navSecction Innovaciones">
                    <div className="cabecera">
                        <button className="n-button">INNOVACIONES</button>
                    </div>
                    <div className="buttons">
                        <button className="n-button">ORAL</button><div className="vertical-line"></div>
                        <button className="n-button">PERSONAL</button>
                        <button className="n-button">HOME</button>

                    </div>
                </div>
                <div className="navSecction Implementaciones">
                    <div className="cabecera">
                        <button className="n-button">IMPLEMENTACIONES</button>
                    </div>
                    <div className="buttons">
                        <button className="n-button">ORAL</button><div className="vertical-line"></div>
                        <button className="n-button">PERSONAL</button><div className="vertical-line"></div>
                        <button className="n-button">HOME</button>

                    </div>
                </div>
                <div className="navSecction ParticipaYGana">
                    <div className="cabecera">
                        <button className="n-button">PARTICIPA Y GANA</button>
                    </div>
                </div>
            </div>
            <div className="n-logoMTJ">
                <img src={Images.LogoMTJ} alt="" />
            </div>
        </div>
    );
}

export default Nav;