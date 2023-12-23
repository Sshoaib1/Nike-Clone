import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function HomeProductLoader() {
  return (
    <Container className="mb-3">
      <Row className="mb-3 gx-3">
        {[1, 2, 3, 4].map((item) => (
          <Col key={item} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img
                variant="top"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  aspectRatio: "4 / 5",
                }}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeProductLoader;
