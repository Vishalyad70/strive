import React from "react";
import { useState } from "react";
import "./db.css";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Modal,
  Button,
} from "react-bootstrap";

export function Usersdetails({ setshowdivs }) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  return (
    <div>
      <div className="db_main ">
        <Container fluid>
          <Row>
            <Col>
              {" "}
              <h5 className="mb-2">Users Details</h5>
              <Breadcrumb>
                <Breadcrumb.Item onClick={() => setshowdivs("third")}>
                  Total Users
                </Breadcrumb.Item>

                <Breadcrumb.Item active>Data</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={5}>
              <div className="box_rop">
                {" "}
                <div className="green_box">
                  <div className="user_detail_box">
                    <div className="use_img">
                      <img src="./images/user.png" alt="" />
                    </div>
                    <div className="desig">
                      <h5>Amelia francis</h5>
                      <span>Ui/Ux Designer</span>
                    </div>
                  </div>
                  <div className="personal_inf">
                    <h5>Personal information </h5>
                    <ul>
                      <li>
                        <img src="./images/mail.svg" alt="" />
                        <span>Mangi@example.com</span>
                      </li>
                      <li>
                        <img src="./images/location.svg" alt="" />
                        <span>
                          Delicia Williams New York, NY 10001 456 - 7890
                        </span>
                      </li>
                      <li>
                        <img src="./images/call.svg" alt="" />
                        <span>+1849750xxx</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card_box">
                    <div className="jobs_app" onClick={handleShow}>
                      <div className="title_wrapper">
                        <h5>Jobs Applies</h5>
                        <span>46 Jobs</span>
                      </div>
                    </div>
                    <div className="jobs_app" onClick={handleShow1}>
                      <div className="title_wrapper">
                        <h5>Jobs Selection</h5>
                        <span>46 Jobs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12} lg={7}>
              <div className="box_rop">
                <div className="green_box">
                  <div className="personal_inf">
                    <h5>Work Experience</h5>
                    <div className="work_details">
                      <div className="com_name">
                        <div className="title_wrapper">
                          <h5>Customer Service Expert</h5>
                          <span>ACME Corp. New York, NY 10001</span>
                        </div>
                        <p>2018 – 2020</p>
                      </div>
                      <div className="com_name">
                        <div className="title_wrapper">
                          <h5>Customer Service Expert</h5>
                          <span>ACME Corp. New York, NY 10001</span>
                        </div>
                        <p>2018 – 2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="personal_inf">
                    <h5>Skills</h5>
                    <ul className="skill_box">
                      <li>Html</li>
                      <li>Html</li>
                      <li>Html</li>
                    </ul>
                  </div>
                  <div className="personal_inf">
                    <h5>Education</h5>
                    <div className="work_details">
                      <div className="com_name">
                        <div className="title_wrapper">
                          <h5>Customer Service Expert</h5>
                          <span>ACME Corp. New York, NY 10001</span>
                        </div>
                        <p>2018 – 2020</p>
                      </div>
                      <div className="com_name">
                        <div className="title_wrapper">
                          <h5>Customer Service Expert</h5>
                          <span>ACME Corp. New York, NY 10001</span>
                        </div>
                        <p>2018 – 2020</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Modal className="jobs_list" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            
          </Modal.Header>
          <Modal.Body>
            <div className="job_name">
            <div className="com_name">
                        <div className="title_wrapper">
                          <h5>Customer Service Expert</h5>
                          <span>IBM.INC</span>
                          <span className="date pl-4">Posted 12.feb.2021</span>
                        </div>
                        <p>Applied</p>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="job_name">
            <div className="com_name">
                        <div className="title_wrapper">
                          <h5>Customer Service Expert</h5>
                          <span>IBM.INC</span>
                          <span className="date pl-4">Posted 12.feb.2021</span>
                        </div>
                        <p>Applied</p>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="job_name">
            <div className="com_name">
                        <div className="title_wrapper">
                          <h5>Customer Service Expert</h5>
                          <span>IBM.INC</span>
                          <span className="date pl-4">Posted 12.feb.2021</span>
                        </div>
                        <p>Applied</p>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

          </Modal.Body>
         
        </Modal>

        <Modal className="jobs_list" show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            
          </Modal.Header>
          <Modal.Body>
            <div className="job_name">
            <div className="com_name">
                        <div className="title_wrapper">
                          <h5>Customer Service Expert</h5>
                          <span>IBM.INC</span>
                          <span className="date pl-4">Posted 12.feb.2021</span>
                        </div>
                        <p>Selected</p>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="job_name">
            <div className="com_name">
                        <div className="title_wrapper">
                          <h5>Customer Service Expert</h5>
                          <span>IBM.INC</span>
                          <span className="date pl-4">Posted 12.feb.2021</span>
                        </div>
                        <p>Selected</p>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="job_name">
            <div className="com_name">
                        <div className="title_wrapper">
                          <h5>Customer Service Expert</h5>
                          <span>IBM.INC</span>
                          <span className="date pl-4">Posted 12.feb.2021</span>
                        </div>
                        <p>Selected</p>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

          </Modal.Body>
         
        </Modal>
      </div>
    </div>
  );
}
