import React from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";

function NoInternet({ isOnline }) {
  return (
    <Container className="position-fixed bottom-0 end-0 m-4" style={{ zIndex: 10 }}>
      {!isOnline && (
        <Row className="justify-content-end">
          <Col md={6} lg={4}>
            <Alert
              variant="danger"
              className="d-flex justify-content-between align-items-center"
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                WebkitBackdropFilter: "blur(16px) saturate(180%)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.125)",
              }}
            >
              <span>Check Your Internet Connection...</span>
              <Spinner animation="border" variant="light" />
            </Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default NoInternet;
