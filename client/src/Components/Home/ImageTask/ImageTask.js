import React from "react";
import { Accordion, Button, Card, Container, Row, Col } from "react-bootstrap";
import "./ImageTask.sass";

const ImageTask = () => {
  return (
    <Container>
      <Row>
        <Col lg={4} md={6} sm={12}>
          <Card className="imageTask__card">
            <Card.Img variant="top" src="https://i.ibb.co/5Y5hjZ9/banner.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Accordion defaultActiveKey="0">
                <Card className="imageTaskCollapse__card">
                  <Card.Header className="text-center">
                    <Accordion.Toggle
                      variant="success"
                      as={Button}
                      eventKey="0"
                    >
                      Task Details
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="text-center">
                      <Button className="imageTask__btn" variant="success">
                        Download
                      </Button>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageTask;
