import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddAdmin.sass";
import DashboardNav from "../DashboardNav/DashboardNav";

const AddAdmin = () => {
  const { register, handleSubmit, errors } = useForm({});
  const onSubmit = async (data, e) => {
    e.target.reset();
  };

  return (
    <>
      <DashboardNav />
      <>
        <Container className="addAdmin">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="justify-content-center">
              <Col md={8}>
                <Form.Label> Email</Form.Label>
                <Form.Group>
                  <Form.Control
                    name="email"
                    type="text"
                    placeholder="Admin Email"
                    className="addAdmin__form"
                    ref={register({
                      required: "Email is required",
                      pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Please Enter valid email address",
                      },
                    })}
                  />
                  <span style={{ color: "red" }}>
                    {errors.email && errors.email.message}
                  </span>
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={8} className="mt-3 mb-3">
                <Button
                  className="addAdmin__btn"
                  type="submit"
                  variant="success"
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </>
    </>
  );
};

export default AddAdmin;
