import React, { useState } from "react";
import { Col, Container, Image as BootstrapImage, Modal, Row } from "react-bootstrap";

export const ImageModal = ({ img }) => {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <Container fluid>
      <Row xs={2} md={2} lg={3} xl={2} className="g-4">
        {img?.map((image, index) => (
          <Col key={index}>
            <BootstrapImage
              src={image}
              onClick={() => handleShow(image)}
              style={{ cursor: "pointer" }}
              fluid
            />
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton />
        <Modal.Body>
          <Row xs={1} md={1} lg={2} xl={2} className="g-4">
            {img?.map((image, index) => (
              <Col key={index}>
                <BootstrapImage src={image} fluid />
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
};
