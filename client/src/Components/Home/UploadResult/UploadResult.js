import React, { useContext, useEffect, useState } from "react";
import { Accordion, Button, Card, Container, Row, Col } from "react-bootstrap";
import "./UploadResult.sass";
import HomeNav from "../HomeNav/HomeNav";
import { userInformationData } from "../../../App";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";
import CircularProgress from "@material-ui/core/CircularProgress";

const UploadResult = () => {
  const [studentTask, setStudentTask] = useState([]);
  const [userData, setUserData] = useContext(userInformationData);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filterData = async () => {
      try {
        const res = await AxiosConfig.get(
          "/studentTask?email=" + userData.email
        );
        setStudentTask(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    filterData();
  }, [userData.email]);

  return (
    <>
      <HomeNav />

      <Container>
        {!loading ? (
          <Row>
            {studentTask.map((stk) => (
              <Col key={stk._id} lg={4} md={6} sm={12}>
                <Card className="uploadTask__card">
                  <Card.Img
                    variant="top"
                    src={`data:image/jpeg;base64,${stk.image.img}`}
                  />
                  <Card.Body>
                    <Card.Title>{stk.task}</Card.Title>
                    <Accordion defaultActiveKey="0">
                      <Card className="uploadTaskCollapse__card">
                        <Card.Header className="text-center">
                          <Accordion.Toggle
                            className="uploadTask__btn"
                            variant="success"
                            as={Button}
                            eventKey="1"
                          >
                            Show Result
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body className="text-center">
                            <Button
                              className="uploadTask__btn"
                              variant="success"
                            >
                              {stk.marks}
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
        ) : (
          <Row className="justify-content-center">
            <CircularProgress color="secondary" />
          </Row>
        )}
      </Container>
    </>
  );
};

export default UploadResult;
