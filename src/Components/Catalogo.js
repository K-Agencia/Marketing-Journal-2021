import React from 'react';
import Productos from './Productos';
import TituloBanner from './TituloBanner';
import Slider from './Slider';
import Container from 'react-bootstrap/esm/Container';

function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const Catalogo = ({ titulo }) => {

    let navTitulo = capitalizarPrimeraLetra(titulo);
    window.document.title = `${navTitulo} - Marketing Journal`;

    return (
        <div className="content">
            <div className="espacio"></div>
            <Container>
                <h2 className="t_seccion_slider oral">Oral Care</h2>
                <Slider titulo={titulo} tipo="oral"></Slider>
                <h2 className="t_seccion_slider personal">Personal Care</h2>
                <Slider titulo={titulo} tipo="personal"></Slider>
                <h2 className="t_seccion_slider home">Home Care</h2>
                <Slider titulo={titulo} tipo="home"></Slider>
            </Container>

            <TituloBanner titulo={titulo}></TituloBanner>

            <Container>
                <div>
                    <h2 id="s_oral" className="t_seccion oral">Oral Care</h2>
                    <Productos titulo={titulo} tipo="oral"></Productos>
                    <h2 id="s_personal" className="t_seccion personal">Personal Care</h2>
                    <Productos titulo={titulo} tipo="personal"></Productos>
                    <h2 id="s_home" className="t_seccion home">Home Care</h2>
                    <Productos titulo={titulo} tipo="home"></Productos>
                </div>
            </Container>
            <div className="espacio"></div>
        </div>
    );
};

export default Catalogo;