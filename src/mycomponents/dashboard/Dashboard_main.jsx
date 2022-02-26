import React from "react";
import ".././style.css";
import { Header_nav } from "./Header_nav";
import { useState } from "react";
import { Dashboard_side_nav } from "./Dashboard_side_nav";
import { Dashboard_first } from "./dashboard_container/Dashboard_first";
import { Totaljobs } from "./dashboard_container/Totaljobs";
import { Totalusers } from "./dashboard_container/Totalusers";
import { Question } from "./dashboard_container/Question";
import { Activity } from "./dashboard_container/Activity";
import { Calender } from "./dashboard_container/Calender";
import {Usersdetails} from "./dashboard_container/Usersdetails"
import { Container, Row, Col } from "react-bootstrap";

export function Dashboard_main() {
  const [showdivs, setshowdivs] = useState("first");
  const [shownav, setshownav] = useState(true);
  return (
    <div className={`dash_main`}>
      <Dashboard_side_nav setshowdivs={setshowdivs} shownav={shownav} />
      <div className={`side_wrapper ${shownav ? "rm_mr" : "ad_mr"}`}>
        <Container fluid>
            
          <Row>
            <Col>
              {" "}
              <Header_nav setshownav={setshownav} />
            </Col>
          </Row>
        </Container>

        {showdivs === "first" ? <Dashboard_first /> : ""}
        {showdivs === "second" ? <Totaljobs /> : ""}
        {showdivs === "third" ? <Totalusers setshowdivs={setshowdivs} /> : ""}
        {showdivs === "fourth" ? <Activity /> : ""}
        {showdivs === "fifth" ? <Calender /> : ""}
        {showdivs === "sixth" ? <Question /> : ""}
        {showdivs === "user" ? <Usersdetails setshowdivs={setshowdivs}  /> : ""}
      </div>
    </div>
  );
}
