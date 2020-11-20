import React, { useEffect, useState } from "react";
import { Card, Container, Dropdown, Table } from "react-bootstrap";
import DashboardNav from "../DashboardNav/DashboardNav";
import "./EditedImageList.sass";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";

const EditedImageList = () => {
  const [allTask, setAllTask] = useState([]);

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
  };

  const handelChange = async (id, index) => {
    const marks = document.getElementById(`inputGroupSelect${index}`).value;
    const number = { id, marks };
    try {
      await AxiosConfig.patch(`/update/${id}`, number);
    } catch (error) {
      console.log(error);
    }
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
            {allTask.map((task, index) => (
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
                  <select
                    className="selectpicker show-tick"
                    onChange={() => handelChange(task._id, index)}
                    id={"inputGroupSelect" + index}
                  >
                    <option name="marks" value="1">
                      1
                    </option>
                    <option name="marks" value="2">
                      2
                    </option>
                    <option name="marks" value="3">
                      3
                    </option>
                    <option name="marks" value="4">
                      4
                    </option>
                    <option name="marks" value="5">
                      5
                    </option>
                    <option name="marks" value="6">
                      6
                    </option>
                    <option name="marks" value="7">
                      7
                    </option>
                    <option name="marks" value="8">
                      8
                    </option>
                    <option name="marks" value="9">
                      9
                    </option>
                    <option name="marks" value="10">
                      10
                    </option>
                  </select>

                  {/* <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu>

                      <Dropdown.Item key={numberId}>{number}</Dropdown.Item>

                      <Dropdown.Item
                        onClick={() => handleTaskDelete(task._id)}
                        className="text-danger"
                      >
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}
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
