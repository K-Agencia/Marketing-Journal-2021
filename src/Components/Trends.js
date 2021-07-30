import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import '../css/Trends.css';
import Insights from "./Insights";
import Media from './Media';

const Trends = () => {

    window.document.title = `Trends - Marketing Journal`;

    const container = useRef(null);
    const titulo = useRef(null);

    let res = window.screen.width;
    // console.log(res);
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../img/nueva_animacion.json') // the path to the animation json ../img/Animacion2.json  ----------- d6d6d6
        });
    }, [])

    useEffect(() => {
        lottie.loadAnimation({
            container: titulo.current, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../img/tendencias_titulo2.json') // the path to the animation json ../img/Animacion2.json  ----------- d6d6d6
        });
    }, [])

    return (
        <div className="Body_Trends">
            <div className="Body_Trends_container">
                <div className="container_trends_titulo" ref={titulo}></div>
                <div className="Body_Trends_animacion">
                    <div className={res > 480 ? "buttonsTrends" : "buttonsTrends desktop"}>
                        <button className="boton1"><a href="#Insights">Mercado</a></button>
                    </div>
                    <div className="container_trends" ref={container}></div>
                    <div className={res > 480 ? "buttonsTrends" : "buttonsTrends desktop"}>
                    <button className="boton2"><a href="#Media">Digital</a></button>
                    </div>
                    <div className={res > 480 ? "buttonsTrends_m" : "buttonsTrends movil"}>
                        <button className="boton1_m"><a href="#Insights">Mercado</a></button>
                        <button className="boton2_m"><a href="#Media">Digital</a></button>
                    </div>
                </div>
            </div>
            <div>
                <Insights></Insights>
                <Media></Media>
            </div>
        </div>
    );
};

export default Trends;