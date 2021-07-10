import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import '../css/Trends.css';
import Insights from "./Insights";

const Trends = () => {

    const container = useRef(null);
    const titulo = useRef(null);

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
            animationData: require('../img/trendstitulo_colgateready.json') // the path to the animation json ../img/Animacion2.json  ----------- d6d6d6
        });
    }, [])

    return (
        <div className="Body_Trends">
            <div className="Body_Trends_container">
                <div className="container_trends_titulo" ref={titulo}></div>
                <div className="Body_Trends_animacion">
                    <div className="buttonsTrends">
                        <button className="boton1"><a href="#Insights">Insights</a></button>
                    </div>
                    <div className="container_trends" ref={container}></div>
                    <div className="buttonsTrends">
                        <button href="#Media" className="boton2">Media</button>
                    </div>
                </div>
            </div>
            <div>
            <Insights></Insights>
            </div>
        </div>
    );
};

export default Trends;