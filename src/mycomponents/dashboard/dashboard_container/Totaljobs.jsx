import React from "react";
import "./db.css";
import { Table } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";

export function Totaljobs() {
  return (
    <div className="user_total">
      <Container fluid>
        <Row>
          <Col>
            {" "}
            <h5>Total Post Jobs</h5>
            <span>List</span>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <div className="user_box">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th className="head_1">#</th>
                    <th>Jobs Name</th>
                    <th>Posted Date</th>
                    <th>Closed Date</th>
                    <th>Vaccancies</th>
                    <th>Status</th>
                    <th></th>
                    <th className="head_last"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Software Engineer</td>
                    <td>23.05.2021</td>
                    <td>02.03.2022</td>
                    <td>56</td>
                    <td>Active</td>
                    <td></td>
                    <td>
                      <Button className="login_btn" type="">
                        View Details
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Software Engineer</td>
                    <td>23.05.2021</td>
                    <td>02.03.2022</td>
                    <td>56</td>
                    <td>Active</td>
                    <td></td>
                    <td>
                      <Button className="login_btn" type="">
                        View Details
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Software Engineer</td>
                    <td>23.05.2021</td>
                    <td>02.03.2022</td>
                    <td>56</td>
                    <td>Active</td>
                    <td></td>
                    <td>
                      <Button className="login_btn" type="">
                        View Details
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
