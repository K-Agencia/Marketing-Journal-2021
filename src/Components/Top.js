import React, { useState } from 'react';
import { Images } from '../Constant/Images';
import '../css/Top.css';
import { useScrollTo } from "react-use-window-scroll";

const Top = () => {
    const scrollTo = useScrollTo();
    const scrollToTop = () => scrollTo({ top: 0, left: 0, behavior: "smooth" });
    
    const [toUp, setToUp] = useState(false);

    const visible = () => {
        if(window.scrollY >= 300){
            setToUp(true);
        }else{
            setToUp(false);
        }
    }

    window.addEventListener('scroll', visible);

    return (
        <div className={toUp ? "scroll-to-top visible" : "scroll-to-top"} data-toggle="tooltip" data-placement="top" title="Ir arriba" onClick={scrollToTop}>
            <img className="imgIcono" src={Images.Flecha} alt="" />
        </div>
    );
};

export default Top;