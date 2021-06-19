import React from 'react';
import Productos from './Productos';
import TituloBanner from './TituloBanner';
import Slider from './Slider';
import Container from 'react-bootstrap/esm/Container';

const Catalogo = ({ titulo }) => {
    return (
        <div>
            {/* <Slider></Slider> */}
            <TituloBanner></TituloBanner>
            <Container>
                <h2 className="t_seccion oral">Oral Care</h2>
                <Productos titulo={titulo} tipo="oral"></Productos>
                <h2 className="t_seccion personal">Personal Care</h2>
                <Productos titulo={titulo} tipo="personal"></Productos>
                <h2 className="t_seccion home">Home Care</h2>
                <Productos titulo={titulo} tipo="home"></Productos>
            </Container>
        </div>
    );
};

export default Catalogo;