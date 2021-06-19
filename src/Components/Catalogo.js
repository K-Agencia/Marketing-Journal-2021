import React from 'react';
import Productos from './Productos';
import TituloBanner from './TituloBanner';

const Catalogo = ({titulo}) => {
    return (
        <div>
            <TituloBanner></TituloBanner>
            <h2 className="t_seccion oral">Oral Care</h2>
            <Productos titulo={titulo} tipo="oral"></Productos>
            <h2 className="t_seccion personal">Personal Care</h2>
            <Productos titulo={titulo} tipo="personal"></Productos>
            <h2 className="t_seccion home">Home Care</h2>
            <Productos titulo={titulo} tipo="home"></Productos>
        </div>
    );
};

export default Catalogo;