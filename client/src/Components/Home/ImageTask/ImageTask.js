import React, { useContext, useState, useEffect } from "react";
import { Accordion, Button, Card, Container, Row, Col } from "react-bootstrap";
import { userInformationData } from "../../../App";
import "./ImageTask.sass";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";

const ImageTask = () => {
  const [userData, setUserData] = useContext(userInformationData);

  const [taskDetails, setTaskDetails] = useState([]);

  const [selectTask, setSelectTask] = useState([]);

  const handleTask = (taskSelected) => {
    setSelectTask({ ...userData, ...taskSelected });
  };
  // Post
  useEffect(() => {
    const handlePost = async () => {
      try {
        await AxiosConfig.post("/selectedTask", selectTask);
      } catch (error) {
        console.log(error);
      }
    };
    handlePost();
  }, [selectTask]);

  //Get
  useEffect(() => {
    const handleTask = async () => {
      try {
        const res = await AxiosConfig.get("/givenTask");
        const data = res.data;
        setTaskDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    handleTask();
  }, []);

  return (
    <Container>
      {userData.isSignIn && (
        <Row>
          {taskDetails.map((task) => (
            <Col key={task._id} lg={4} md={6} sm={12}>
              <Card className="imageTask__card">
                <Card.Img
                  variant="top"
                  height="300px"
                  src={`data:image/jpeg;base64,${task.image.img}`}
                />
                <Card.Body>
                  <Card.Title>{task.task}</Card.Title>
                  <Accordion defaultActiveKey="0">
                    <Card className="imageTaskCollapse__card">
                      <Card.Header className="text-center">
                        <Accordion.Toggle
                          className="imageTask__btn"
                          variant="success"
                          as={Button}
                          eventKey="1"
                        >
                          Task Details
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>{task.description}</Card.Body>
                      </Accordion.Collapse>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body className="text-center">
                          <Button
                            onClick={() => handleTask(task)}
                            className="imageTask__btn"
                            variant="success"
                          >
                            Download
                          </Button>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ImageTask;
