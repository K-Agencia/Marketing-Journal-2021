import React from 'react';
import { Images } from '../Constant/Images';
import "./../css/Nav.css";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-5 bg-white">
             <div className="container-fluid Navbar">{/*className="Navbar" shadow-lg  href="innovaciones"*/}
                <div className="n-logo">
                    <img src={Images.Logo} alt="" />
                </div>
                <div className="direccionar">
                    <div className="navSecction Innovaciones">
                        <div className="cabecera">
                            <button className="n-button"><a href="/innovaciones">INNOVACIONES</a></button>
                        </div>
                        <div className="buttons">
                            <button className="n-button"><a href={`/innovaciones#s_oral`}>ORAL</a></button><div className="vertical-line"></div>
                            <button className="n-button"><a href={`/innovaciones#s_personal`}>PERSONAL</a></button><div className="vertical-line"></div>
                            <button className="n-button"><a href={`/innovaciones#s_home`}>HOME</a></button>

                        </div>
                    </div>
                    <div className="navSecction Implementaciones">
                        <div className="cabecera">
                            <button className="n-button"><a href="/implementaciones">IMPLEMENTACIONES</a></button>
                        </div>
                        <div className="buttons">
                            <button className="n-button"><a href={`/implementaciones#s_oral`}>ORAL</a></button><div className="vertical-line"></div>
                            <button className="n-button"><a href={`/implementaciones#s_personal`}>PERSONAL</a></button><div className="vertical-line"></div>
                            <button className="n-button"><a href={`/implementaciones#s_home`}>HOME</a></button>

                        </div>
                    </div>
                    {/* <div className="navSecction ParticipaYGana">
                    <div className="cabecera">
                        <button className="n-button">PARTICIPA Y GANA</button>
                    </div>
                </div> */}
                </div>
                <div className="n-logoMTJ">
                    <img src={Images.LogoMTJ} alt="" />
                </div>
            </div>
        </nav>
    );
}

export default Nav;