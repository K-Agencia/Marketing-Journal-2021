import React from 'react';
import '../css/Publicidad.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Publicidad = ({ pTitulo, pSrc, tipo }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (tipo === 'i') {

        return (
            <div>
                <h4 className="pTitulo">{pTitulo}</h4>
                <img className="p_imagen" src={pSrc} alt="" onClick={handleShow} />

                <Modal show={show} onHide={handleClose} size="xl" centered>
                    <Modal.Body>
                        <img className="img-fluid" src={pSrc} alt="" />
                    </Modal.Body>
                </Modal>
            </div>
        );

    } else {

        return (
            <div>
                <h4 className="pTitulo">{pTitulo}</h4>
                <iframe className="p_video" src={pSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
        );

    }
};

export default Publicidad;