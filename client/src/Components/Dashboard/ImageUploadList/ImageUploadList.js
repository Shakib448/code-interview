import React, { useEffect, useState } from "react";
import { Card, Container, Dropdown, Table } from "react-bootstrap";
import DashboardNav from "../DashboardNav/DashboardNav";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";

const ImageUploadList = () => {
  const [uploadTask, setUploadTask] = useState([]);

  const handleUploadTask = async () => {
    try {
      const res = await AxiosConfig.get("/givenTask");
      setUploadTask(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleUploadTask();
  }, [uploadTask]);

  const handleTaskDelete = async (id) => {
    try {
      await AxiosConfig.delete(`/taskDelete/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <DashboardNav heading="Upload List" />
      <Container className="mt-5 mb-5 table">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>Image</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {uploadTask.map((task) => (
              <tr key={task._id}>
                <td>{task.task}</td>
                <td className="text-wrap">{task.description}</td>
                <td>
                  {" "}
                  <Card.Img
                    variant="top"
                    src={`data:image/jpeg;base64,${task.image.img}`}
                  />
                </td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => handleTaskDelete(task._id)}
                        className="text-danger"
                      >
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ImageUploadList;
