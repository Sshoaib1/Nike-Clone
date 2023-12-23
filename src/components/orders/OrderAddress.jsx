import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const OrderAddress = ({
  firstName,
  lastName,
  email,
  mobile,
  addressLine1,
  addressLine2,
  locality,
  state,
  pinCode,
  country,
}) => {
  return (
    <Container fluid className="px-4">
      <Card className="p-4">
        <h4 className="fw-bold">Shipping Address</h4>
        <hr className="my-3" />

        <Row className="mb-3">
          <Col xs={12} md={6} lg={4}>
            <p className="fs-5">
              <strong>Full Name:</strong> {`${firstName} ${lastName}`}
            </p>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <p className="fs-5">
              <strong>Mobile:</strong> +92 {mobile}
            </p>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <p className="fs-5">
              <strong>Email:</strong> {email}
            </p>
          </Col>
        </Row>

        <hr className="my-3" />

        <Row className="mb-3">
          <Col xs={12} md={6} lg={4}>
            <p className="fs-5">
              <strong>Address:</strong> {addressLine1}
            </p>
          </Col>
          {addressLine2 && (
            <Col xs={12} md={6} lg={4}>
              <p className="fs-5">
                <strong>Address(2):</strong> {addressLine2}
              </p>
            </Col>
          )}
          <Col xs={12} md={6} lg={4}>
            <p className="fs-5">
              <strong>City:</strong> {locality}
            </p>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <p className="fs-5">
              <strong>State:</strong> {state}
            </p>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <p className="fs-5">
              <strong>Pincode:</strong> {pinCode}
            </p>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <p className="fs-5">
              <strong>Country:</strong> {country}
            </p>
          </Col>
        </Row>

        <hr className="my-3" />
      </Card>
    </Container>
  );
};

export default OrderAddress;
