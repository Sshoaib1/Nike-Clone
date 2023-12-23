import React from "react";
import { Container, Alert } from "react-bootstrap";

export const Error = () => {
  return (
    <Container className="my-5">
      <Alert variant="danger" className="text-center" style={{ fontSize: "20px", fontWeight: 500 }}>
        Something went Wrong!
      </Alert>
    </Container>
  );
};
