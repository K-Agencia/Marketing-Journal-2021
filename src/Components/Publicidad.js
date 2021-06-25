import React from 'react';
import '../css/Publicidad.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


const Publicidad = ({ pTitulo, pSrc, tipo }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (tipo === 'i') {

        return (
            <div className="pub_producto">
                <h4 className="pTitulo">{pTitulo}</h4>
                <img className="p_imagen" src={pSrc} alt="" onClick={handleShow} />

                <Modal show={show} onHide={handleClose} size="ml" className="modalCenter">
                    <Modal.Body>
                        <img className="img-fluid" src={pSrc} alt="" />
                    </Modal.Body>
                </Modal>
            </div>
        );

    } else {

        return (
            <div className="pub_producto">
                <h4 className="pTitulo">{pTitulo}</h4>
                <iframe className="p_video" src={pSrc} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
        );

    }
};

export default Publicidad;