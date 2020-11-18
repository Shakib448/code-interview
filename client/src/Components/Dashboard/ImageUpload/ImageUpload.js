import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./ImageUpload.sass";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";
import DashboardNav from "../DashboardNav/DashboardNav";

const ImageUpload = () => {
  const [service, setService] = useState({});

  const [file, setFile] = useState(null);

  const { register, handleSubmit, errors } = useForm({});
  const onSubmit = async (data, e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("service", data.service);
    formData.append("description", data.description);

    e.target.reset();

    try {
      await AxiosConfig.post("/addService", formData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  return (
    <>
      <DashboardNav heading="Upload" />
      <>
        <Container className="imageUpload">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="justify-content-center">
              <Col md={8}>
                <Form.Label>Task Title</Form.Label>
                <Form.Group>
                  <Form.Control
                    name="task"
                    type="text"
                    placeholder="Your task"
                    className="imageUpload__form"
                    ref={register({
                      required: "Task is required",
                      pattern: {
                        value: /[A-Z][a-z]/,
                        message: "First text should be capitalized",
                      },
                    })}
                  />
                  <span style={{ color: "red" }}>
                    {errors.task && errors.task.message}
                  </span>
                </Form.Group>
              </Col>
              <Col md={8}>
                <Form.Group>
                  <Form.Label>Task Details</Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={6}
                    name="description"
                    type="text"
                    placeholder="Your Description"
                    className="imageUpload__form"
                    ref={register({
                      required: "Task details is required",
                      pattern: {
                        value: /[A-Z][a-z]/,
                        message: "First text should be capitalized",
                      },
                      minLength: {
                        value: 15,
                        message: "Task details should be 15 characters",
                      },
                    })}
                  />
                  <span style={{ color: "red" }}>
                    {errors.description && errors.description.message}
                  </span>
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={8}>
                <Form.Label>Upload Image</Form.Label>
                <br />
                <input
                  onChange={handleFileChange}
                  type="file"
                  name="file"
                  id="file"
                  className="inputFile"
                  ref={register({
                    required: true,
                  })}
                />
                <label htmlFor="file">
                  <span>
                    {" "}
                    <CloudUploadIcon />{" "}
                  </span>
                  <span style={{ fontSize: "14px" }}>Upload Image</span>
                </label>
                <br />
                <span style={{ color: "red" }}>
                  {" "}
                  {errors.file && "Image is required"}{" "}
                </span>
              </Col>
              <Col md={8} className="mt-3 mb-3">
                <Button
                  className="imageUpload__btn"
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

export default ImageUpload;
