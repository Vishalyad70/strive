import React from "react";
import "./db.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
import Barchart from "./charts/Barchart";
import  ChartsLine from "./charts/ChartsLine";


export function Dashboard_first() {
  return (
    <div className="db_main">
    
      <div className="content_wrapper">
        <Container fluid>
          <Row>
            <Col>  <h5 className="mb-3">Dashboard</h5></Col>
          </Row>
          <Row>
            <Col md={6} lg={3}>
              <div className="first_box ">
                <div className="red_box mb-3 ">
                  <span>
                    <img src="./images/db/empoyers.svg" alt="" />
                  </span>
                  <p className="para">1200</p>
                </div>
                <div className="red_box">
                  <p>Total Employers</p>
                  <Link to="/">View All</Link>
                </div>
              </div>
              <div className="first_box ">
                <div className="red_box mb-3 ">
                  <span>
                    <img src="./images/db/empoyers.svg" alt="" />
                  </span>
                  <p className="para">1200</p>
                </div>
                <div className="red_box">
                  <p>Total Jobs</p>
                  <Link to="/">View All</Link>
                </div>
              </div>
              <div className="first_box ">
                <div className="red_box mb-3 ">
                  <span>
                    <img src="./images/db/empoyers.svg" alt="" />
                  </span>
                  <p className="para">1200</p>
                </div>
                <div className="red_box">
                  <p>Total Users</p>
                  <Link to="/">View All</Link>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="first_box ">
                <div className="red_box mb-3 ">
                  <span>
                    <img src="./images/db/empoyers.svg" alt="" />
                  </span>
                  <p className="para">1200</p>
                </div>
                <div className="red_box">
                  <p>Total Candidates</p>
                  <Link to="/">View All</Link>
                </div>
              </div>
              <div className="first_box" style={{height:'509px'}}>
              <div className="bar_chart">
                <div className="grey_box">
                  <h5>Employer’s charts</h5>
                  <div className="tab_box">
                  <Tabs defaultActiveKey="Today" id="uncontrolled-tab-example" >
              <Tab eventKey="Today" title="Today">
             <ChartsLine />
              </Tab>
              <Tab eventKey="7days" title="7days">
            <ChartsLine />
              </Tab>
              <Tab eventKey="2w" title="2w">
            <ChartsLine />
              </Tab>
              <Tab eventKey="1m" title="1m">
            <ChartsLine />
              </Tab>
              <Tab eventKey="3m" title="3m">
            <ChartsLine />
              </Tab>
              <Tab eventKey="1y" title="1y">
            <ChartsLine />
              </Tab>
            </Tabs>
                  </div>
                </div>
              </div>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="first_box">
                <h4 className="mb-3">Latest Jobs</h4>
               <div className="wrapper">
               <div className="last_box">
                  <div className="cros_box">
                    <div className="grey_box">
                      <span className="user">
                        <img src="./images/user.png" alt="" />
                      </span>
                      <div>
                        <p>Software Engineer</p>
                        <span>Kamba Inc</span>
                      </div>
                    </div>
                    <span className="date">11 feb 2021</span>
                  </div>
                  <p>Ut consequat semper viverra nam libero justo laoreet sit. Sed viverra tellus in hac habitasse platea......</p>
                  <Button  className="login_btn" type="">
                View Details
              </Button>
                </div>

                <div className="last_box">
                  <div className="cros_box">
                    <div className="grey_box">
                      <span className="user">
                        <img src="./images/user.png" alt="" />
                      </span>
                      <div>
                        <p>Software Engineer</p>
                        <span>Kamba Inc</span>
                      </div>
                    </div>
                    <span className="date">11 feb 2021</span>
                  </div>
                  <p>Ut consequat semper viverra nam libero justo laoreet sit. Sed viverra tellus in hac habitasse platea......</p>
                  <Button  className="login_btn" type="">
                View Details
              </Button>
                </div>

                <div className="last_box">
                  <div className="cros_box">
                    <div className="grey_box">
                      <span className="user">
                        <img src="./images/user.png" alt="" />
                      </span>
                      <div>
                        <p>Software Engineer</p>
                        <span>Kamba Inc</span>
                      </div>
                    </div>
                    <span className="date">11 feb 2021</span>
                  </div>
                  <p>Ut consequat semper viverra nam libero justo laoreet sit. Sed viverra tellus in hac habitasse platea......</p>
                  <Button  className="login_btn" type="">
                View Details
              </Button>
                </div>

                <div className="last_box">
                  <div className="cros_box">
                    <div className="grey_box">
                      <span className="user">
                        <img src="./images/user.png" alt="" />
                      </span>
                      <div>
                        <p>Software Engineer</p>
                        <span>Kamba Inc</span>
                      </div>
                    </div>
                    <span className="date">11 feb 2021</span>
                  </div>
                  <p>Ut consequat semper viverra nam libero justo laoreet sit. Sed viverra tellus in hac habitasse platea......</p>
                  <Button  className="login_btn" type="">
                View Details
              </Button>
                </div>

                <div className="last_box">
                  <div className="cros_box">
                    <div className="grey_box">
                      <span className="user">
                        <img src="./images/user.png" alt="" />
                      </span>
                      <div className="pl-2">
                        <p>Software Engineer</p>
                        <span>Kamba Inc</span>
                      </div>
                    </div>
                    <span className="date">11 feb 2021</span>
                  </div>
                  <p>Ut consequat semper viverra nam libero justo laoreet sit. Sed viverra tellus in hac habitasse platea......</p>
                  <Button  className="login_btn" type="">
                View Details
              </Button>
                </div>

                <div className="last_box">
                  <div className="cros_box">
                    <div className="grey_box">
                      <span className="user">
                        <img src="./images/user.png" alt="" />
                      </span>
                      <div>
                        <p>Software Engineer</p>
                        <span>Kamba Inc</span>
                      </div>
                    </div>
                    <span className="date">11 feb 2021</span>
                  </div>
                  <p>Ut consequat semper viverra nam libero justo laoreet sit. Sed viverra tellus in hac habitasse platea......</p>
                  <Button  className="login_btn" type="">
                View Details
              </Button>
                </div>
              </div>
               </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={6} >
            <div className="first_box">
              <div className="bar_chart view">
                <div className="grey_box">
                  <h5>Employer’s charts</h5>
                  <div className="tab_box">
                  <Tabs defaultActiveKey="Today" id="uncontrolled-tab-example" >
              <Tab eventKey="Today" title="Today">
               <Barchart />
              </Tab>
              <Tab eventKey="7days" title="7days">
              <Barchart />
              </Tab>
              <Tab eventKey="2w" title="2w">
              <Barchart />
              </Tab>
              <Tab eventKey="1m" title="1m">
              <Barchart />
              </Tab>
              <Tab eventKey="3m" title="3m">
              <Barchart />
              </Tab>
              <Tab eventKey="1y" title="1y">
              <Barchart />
              </Tab>
            </Tabs>
                  </div>
                </div>
              </div>
            </div>
            </Col>
            <Col md={12} lg={6}>
            <div className="first_box">
            <div className="bar_chart view">
                <div className="grey_box">
                  <h5>Candidate’s charts</h5>
                  <div className="tab_box">
                  <Tabs defaultActiveKey="Today" id="uncontrolled-tab-example" >
              <Tab eventKey="Today" title="Today">
               <Barchart />
              </Tab>
              <Tab eventKey="7days" title="7days">
              <Barchart />
              </Tab>
              <Tab eventKey="2w" title="2w">
              <Barchart />
              </Tab>
              <Tab eventKey="1m" title="1m">
              <Barchart />
              </Tab>
              <Tab eventKey="3m" title="3m">
              <Barchart />
              </Tab>
              <Tab eventKey="1y" title="1y">
              <Barchart />
              </Tab>
            </Tabs>
                  </div>
                </div>
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
