import React from 'react';
import { Images } from '../Constant/Images';
import "./../css/Nav.css";


const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm responsive-navbar-nav shadow-sm bg-white">
            <div className=" Navb">{/*className="Navbar" shadow-lg  href="innovaciones" container-fluid */}
                <div className="n-logo">
                    <img src={Images.Logo} alt="" />
                </div>
                <div className="direccionar">
                    <div className="navSecction Innovaciones">
                        <div className="cabecera">
                            <button className="n-button"><a href="/">INNOVACIONES</a></button>
                        </div>
                        <div className="buttons" id="btn">
                            <button className="n-button"><a href={`/#s_oral`}>ORAL</a></button><div className="vertical-line"></div>
                            <button className="n-button"><a href={`/#s_personal`}>PERSONAL</a></button><div className="vertical-line"></div>
                            <button className="n-button"><a href={`/#s_home`}>HOME</a></button>
                        </div>
                    </div>
                    <div className="navSecction Implementaciones">
                        <div className="cabecera">
                            <button className="n-button"><a href="/implementaciones">IMPLEMENTACIONES</a></button>
                        </div>
                        <div className="buttons" id="btn">
                            <button className="n-button"><a href={`/implementaciones#s_oral`}>ORAL</a></button><div className="vertical-line"></div>
                            <button className="n-button"><a href={`/implementaciones#s_personal`}>PERSONAL</a></button><div className="vertical-line"></div>
                            <button className="n-button"><a href={`/implementaciones#s_home`}>HOME</a></button>

                        </div>
                    </div>
                    <div className="navSecction Trends">
                        <div className="cabecera">
                            <button className="n-button"><a href={`/trends`}>TRENDS</a></button>
                        </div>
                        <div className="buttons" id="btn">
                            <button className="n-button"><a href={`/trends#Insights`}>INSIGHTS</a></button><div className="vertical-line"></div>
                            <button className="n-button"><a href={`/trends#Media`}>MEDIA</a></button>
                        </div>
                    </div>
                </div>
                <div className="n-logoMTJ">
                    <img src={Images.LogoMTJ} alt="" />
                </div>
            </div>
        </nav>
    );
}

export default Nav;