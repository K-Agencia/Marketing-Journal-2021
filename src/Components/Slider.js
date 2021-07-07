import React from 'react';
import { innovaciones_oral, innovaciones_personal, innovaciones_home, implementaciones_oral, implementaciones_personal, implementaciones_home } from '../Constant/Marketing';
import '../css/Slider.css';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';         // Importar los componentes de Swiper React
import 'swiper/swiper.scss';   // Importar los estilos 'Swiper'
import 'swiper/components/navigation/navigation.scss'; // Importar el CSS de los botones de navegacion
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';   // import Swiper core and required modules
// import { render } from '@testing-library/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);      // install Swiper modules

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

const Slider = ({ titulo, tipo }) => {

    const data = getArray(titulo, tipo);
    let resolucion = window.screen.width;

    return (


        <Swiper
            spaceBetween={resolucion < 480 ? 120 : 50} //Espacio entre las diapositivas
            slidesPerView={resolucion < 480 ? 1 : 5} //Cantidad de diapositivas en pantalla
            navigation
        >
            {data.map(prod_img => (
                <SwiperSlide key={prod_img._id}>
                    <a href={`#${prod_img._id}`}>
                        <img className="img_slider" src={prod_img.imagenMiniatura} alt="" />
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>

    );
};

export default Slider;