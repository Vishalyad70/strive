import React from "react";
import "./db.css";
import { Container, Row, Col,  Tab, Tabs } from "react-bootstrap";
import LineCharts from "./charts/LineCharts";

export function Activity() {
  return (
    <div className="db_main">
      <Container fluid>
        <Row>
          <Col> <h5 className="mb-3">Premium Activities</h5></Col>
        </Row>
        <Row>
          <Col><div className="premium_box">
        <div className="work_box">
        <div className="head_box">
          <h5>Activity</h5>
          <div className="tab_box">
            <Tabs defaultActiveKey="Today" id="uncontrolled-tab-example" >
              <Tab eventKey="Today" title="Today">
               <LineCharts />
              </Tab>
              <Tab eventKey="7days" title="7days">
              <LineCharts />
              </Tab>
              <Tab eventKey="2w" title="2w">
              <LineCharts />
              </Tab>
              <Tab eventKey="1m" title="1m">
              <LineCharts />
              </Tab>
              <Tab eventKey="3m" title="3m">
              <LineCharts />
              </Tab>
              <Tab eventKey="1y" title="1y">
              <LineCharts />
              </Tab>
            </Tabs>
          </div>
        </div>
        </div>
      </div></Col>
        </Row>
      </Container>

     
      
    </div>
  );
}
