import React from "react";
import "./db.css";
import { Container, Row , Col , Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";

export function Question() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="db_main">
      <Container fluid>
        <Row>
          <Col> <h5 className="mb-3">Add Q & A</h5></Col>
        </Row>
        <Row>
          <Col>
          <div className="magenta_box">
        <div className="left_box">
          <div className="upload">
            <span>
              <img src="./images/plus.svg" alt="" />
            </span>
            <p>Upload a Video</p>
          </div>
        </div>
        <div className="right_box">
          <img src="./images/video.png" alt="" />
        </div>
      </div>
      <div className="questionbox">
        <div className="triple_box">
          <h6 className="mb-3">Question Title:</h6>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="add your question" />
          </Form.Group>
          <div className="option">
            <Form.Control type="text" placeholder="Option 1" />
            <Form.Control type="text" placeholder="Option 2" />
            <Form.Control type="text" placeholder="Option 3" />
            <Form.Control type="text" placeholder="Option 4" />
          </div>
        </div>
        <a className="ad" href="">
          Add new question
        </a>
      </div>
      <div className="action_btn">
        <Button className="login_btn" type="">
          Upload
        </Button>
        <Button
          className="login_btn preview_btn ml-2"
          onClick={handleShow}
          type=""
        >
          Preview
        </Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="right_box">
            <img src="./images/video.png" alt="" />
          </div>

          <div className="ans_box">
            <p>
              1.Lorem ipsum dolor sit amet, consectetur adipivscing elit.
              Commodo sed id ornare in eu arcu, aenean. A phasellus turpis duis
              eu
            </p>
            <div className="option_box">
              <Form>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="option 1"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="option 2"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                      <Form.Check
                      inline
                      label="option 3"
                      name="group1"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                      <Form.Check
                      inline
                      label="option 4"
                      name="group1"
                      type={type}
                      id={`inline-${type}-4`}
                    />
                  </div>
                ))}
              </Form>
            </div>
          </div>
        </Modal.Body>
        
      </Modal>
    </Col>
        </Row>
      </Container>
     
       </div>
  );
}
