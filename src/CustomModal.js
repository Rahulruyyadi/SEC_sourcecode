import React, { useState } from 'react';
import { Modal, Button, Container } from 'react-bootstrap';
import './CustomModal.css';

function CustomModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Button variant="primary" className='bt-1' onClick={handleShow}>
        More
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className='pdf-body'>
            <embed src={props.pdfUrl} width="100%" height="600px" />
            {/* Other modal content goes here */}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;
