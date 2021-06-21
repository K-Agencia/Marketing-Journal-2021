import React from 'react';
import Productos from './Productos';
import TituloBanner from './TituloBanner';
import Slider from './Slider';
import Container from 'react-bootstrap/esm/Container';

const Catalogo = ({ titulo }) => {
    console.log("______" + titulo);
    return (
        <div>
            <Container>
                <h2 className="t_seccion oral">Oral Care</h2>
                <Slider titulo={titulo} tipo="oral"></Slider>
                <h2 className="t_seccion personal">Personal Care</h2>
                <Slider titulo={titulo} tipo="personal"></Slider>
                <h2 className="t_seccion home">Home Care</h2>
                <Slider titulo={titulo} tipo="home"></Slider>
            </Container>
            
            <TituloBanner titulo={titulo}></TituloBanner>

            <Container>
                <h2 id="s_oral" className="t_seccion oral">Oral Care</h2>
                <Productos titulo={titulo} tipo="oral"></Productos>
                <h2 id="s_personal" className="t_seccion personal">Personal Care</h2>
                <Productos titulo={titulo} tipo="personal"></Productos>
                <h2 id="s_home" className="t_seccion home">Home Care</h2>
                <Productos titulo={titulo} tipo="home"></Productos>
            </Container>
        </div>
    );
};

export default Catalogo;