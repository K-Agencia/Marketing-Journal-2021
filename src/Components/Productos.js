import React from 'react';
import { innovaciones_oral, innovaciones_personal, innovaciones_home, implementaciones_oral, implementaciones_personal, implementaciones_home } from '../Constant/Marketing';
import Publicidad from './Publicidad';
import '../css/Productos.css';

const getArray = (titulo, tipo) => {
    let cadena = `${titulo}_${tipo}`;

    if (cadena === "innovaciones_oral") {
        return innovaciones_oral;
    } else if (cadena === "innovaciones_personal") {
        return innovaciones_personal;
    } else if (cadena === "innovaciones_home") {
        return innovaciones_home;
    } else if (cadena === "implementaciones_oral") {
        return implementaciones_oral;
    } else if (cadena === "implementaciones_personal") {
        return implementaciones_personal;
    } else if (cadena === "implementaciones_home") {
        return implementaciones_home;
    }
}

// const Productos = () => {
const Productos = ({ titulo, tipo }) => {
    const data = getArray(titulo, tipo);
    
    return (
        <div>
            {/* <h2>{tipo}</h2> */}
            
            {data.map(prod => (

                <div key={prod._id} className="p_producto">

                    <h4 id={prod._id} className={`p_fecha ${tipo}`}>{prod.fecha}</h4>
                    <h3 className={`p_titulo ${tipo}`}>{prod.titulo}</h3>
                    <span className="p_subtitulo">{prod.subtitulo}</span>
                    <p className="p_descripcion">{prod.descripcion}</p>
                    <img className="p_imgPrincipal" src={prod.imagenP} alt="" />
                    <img className="p_imgPrincipal" src={prod.imagenP2} alt="" />
                    <h4 className="p_titulo2">Canales de publicidad</h4>
                    <div className="p_publicidad">
                        {prod.publicidad.map(pub => (
                            <div key={pub._idP} className="p_pub">
                                <Publicidad pTitulo={pub.pTitulo} pSrc={pub.pSrc} tipo={pub.tipo}></Publicidad>
                            </div>
                        ))}
                    </div>
                    <div className="linea"></div>
                </div>
            ))}
            
        </div>
    );
};

export default Productos;