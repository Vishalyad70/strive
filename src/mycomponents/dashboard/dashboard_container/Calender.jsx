import React from 'react'
import './db.css';
import { Container, Row, Col } from "react-bootstrap";
import  Scheduler  from "./calender/Scheduler";


export  function Calender() {
    return (
        <div className="db_main">
            <Container fluid>
                <Row>
                    <Col> <h5 className="mb-3">Calender</h5></Col>
                </Row>
                <Row>
                    <Col>
                    <div className="calender_box">
                        <Scheduler />
                        
                    </div>
                    </Col>
                </Row>

            </Container>
           
           
        </div>
    )
}
