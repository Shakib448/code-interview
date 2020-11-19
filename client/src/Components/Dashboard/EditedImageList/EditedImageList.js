import React, { userState, useEffect } from "react";
import { Container, Dropdown, Table } from "react-bootstrap";
import DashboardNav from "../DashboardNav/DashboardNav";
import "./EditedImageList.sass";

const EditedImageList = () => {
  return (
    <>
      <DashboardNav heading="Edited List" />
      <Container className="mt-5 mb-5 table">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>Image</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                  ></Dropdown.Toggle>

                  <Dropdown.Menu>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number, numberId) => (
                      <Dropdown.Item key={numberId}>{number}</Dropdown.Item>
                    ))}
                    <Dropdown.Item className="text-danger">
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default EditedImageList;
