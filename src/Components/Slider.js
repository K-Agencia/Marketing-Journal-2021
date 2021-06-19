import React from 'react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';         // Importar los componentes de Swiper React
import 'swiper/swiper.scss';   // Importar los estilos 'Swiper'
import 'swiper/components/navigation/navigation.scss'; // Importar el CSS de los botones de navegacion
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';   // import Swiper core and required modules
import { render } from '@testing-library/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);      // install Swiper modules

const Slider = () => {
    return (


            <Swiper
            spaceBetween={50} //Espacio entre las diapositivas
            slidesPerView={6} //Cantidad de diapositivas en pantalla
            navigation
            
            /*onSlideChange={() => console.log('slide change')} //Comando para indicar que hubo un cambio de slider
            onSwiper={(swiper) => console.log(swiper)}
            width="150" height="150" 
            */
        >

                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>

    );
};

export default Slider;