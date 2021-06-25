import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import '../css/Trends.css';

const Trends = () => {

    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../img/Animacion2.json') // the path to the animation json
        });
    }, [])

    return (
        <div className="Body_Trends">
            <div>Trends</div>
            <div className="container" ref={container}></div>
            <div className="buttonsTrends">
                <button>Media</button>
                <button>Insights</button>
            </div>
        </div>
    );
};

export default Trends;