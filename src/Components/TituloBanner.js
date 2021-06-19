import React from 'react';
import { banner } from '../Constant/Marketing'
import '../css/TituloBanner.css';

const tituloBanner = ({ titulo }) => {
    let data;

    if (titulo === "innovaciones") {
        data = banner[0];
    } else {
        data = banner[1];
    }
    return (
        <div>
            <div className="b_banner">
                <div className="b_text">
                    <h2>{data.titulo}</h2>
                    <span>{data.subtitulo}</span>
                    <p>{data.slogan}</p>
                </div>
                <div className="b_img">
                    <img className="b_svg" src={data.imagen} alt="" />
                </div>
            </div>
        </div>
    );
};

export default tituloBanner;