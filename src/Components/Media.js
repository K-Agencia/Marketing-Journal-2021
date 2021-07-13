import React from 'react';
import { Images } from '../Constant/Images';
import "../css/Media.css";

const Media = () => {
    return (
        <div className="Media">
            <div id="Media" className="seccion_trends">
                <h2>2</h2>
            </div>
            <div className="cabeceraMedia">
                <img className="imgCabeceraMedia" src={Images.imgMedia1} alt="" /><br />
            </div>
            <div className="seccionMedia">
                <h3 className="subtituloMedia">¿Cómo estamos apoyando nuestras Marcas desde medios?
                </h3>
                <div className="tituloImg1">
                    <h2 className="tituloImgMedia">Colombia</h2>
                    <p className="subtituloImgMedia">(LC 00000)</p>
                </div>
                <img className="imgMedia" src={Images.imgMedia2} alt="" /><br />
                <hr />
                <h2 className="tituloMedia">¡Conoce las tendencias<br />de Media de este año 2021!</h2>
                <div className="seccionImgMedia">
                    <a href="../pdf/WavemakerTendenciaDeCrecimiento2021.pdf" target="_blank">
                        <img className="sImgMedia" src={Images.imgMedia3} alt="" />
                    </a>
                    <a href="../pdf/TendenciasMedia2021.pdf" target="_blank">
                        <img className="sImgMedia" src={Images.imgMedia4} alt="" /><br />
                    </a>
                    <a href="../pdf/TendenciasMedia2020.pdf" target="_blank">
                        <img className="sImgMedia" src={Images.imgMedia5} alt="" />
                    </a>
                    <a href="../pdf/MediaLATAM2021.pdf" target="_blank">
                        <img className="sImgMedia" src={Images.imgMedia6} alt="" /><br />
                    </a>
                </div>
            </div>
            <div className="seccionDigital">
                <h2>DIGITAL</h2>
                <div className="seccionBienvenida">
                    <div className="sub">
                        <img className="imgMediaBienvenida" src={Images.imgMedia7} alt="" /><br />
                        <p className="textoBienvenida">En este nuevo boletín descubrirás cada <br /> lunes tips y cursos que te ayudarán a</p>
                        <p className="textoBienvenida                       negrita">
                            mejorar tus capacidades <br /> en marketing digital.
                        </p>
                        <p className="titulo_correo">¿Aún no lo recibes? <br />Suscribete dejando tu correo aquí:</p>
                        <input class="correoMedia" type="email" placeholder="usuario@gmail.com" />
                    </div>
                    <div>
                        <img className="imgMediaCelular" src={Images.imgMedia8} alt="" /><br />
                    </div>
                </div>
            </div>
            <div className="imgFinal">
                <a href="../pdf/Digital.pdf">
                    <img className="imgMediaFinal" src={Images.imgMedia9} alt="" /><br />
                </a>
            </div>
        </div>
    );
};

export default Media;