import React, { useEffect, useState } from "react";
import { Card, Container, Dropdown, Table } from "react-bootstrap";
import DashboardNav from "../DashboardNav/DashboardNav";
import "./EditedImageList.sass";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";

const EditedImageList = () => {
  const [allTask, setAllTask] = useState([]);

  const [mark, setMark] = useState();

  useEffect(() => {
    const handleAllTask = async () => {
      try {
        const res = await AxiosConfig.get("/allTask");
        setAllTask(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleAllTask();
  }, []);

  // Delete
  const handleDeleteTask = async () => {
    try {
      const res = await AxiosConfig.get("/allTask");
      setAllTask(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleDeleteTask();
  }, []);

  const handleTaskDelete = async (id) => {
    try {
      await AxiosConfig.delete(`/delete/${id}`).then((res) => {
        if (res) handleDeleteTask();
      });
    } catch (error) {
      console.log(error);
    }

    console.log(id);
  };
  return (
    <>
      <DashboardNav heading="Edited List" />
      <Container className="mt-5 mb-5 table">
        <Table responsive="sm" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Email</th>
              <th>Task</th>
              <th>Details</th>
              <th>Image</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {allTask.map((task) => (
              <tr key={task._id}>
                <td>{task.email}</td>
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
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                        (number, numberId) => (
                          <Dropdown.Item key={numberId}>{number}</Dropdown.Item>
                        )
                      )}
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

export default EditedImageList;
