import React from "react";
import "./db.css";
import {useState} from "react"
import { Table } from "react-bootstrap";
import {Container, Row, Col, Button}  from "react-bootstrap";

export function Totalusers({ setshowdivs }) {
  
  return (
    <div className="user_total">
<Container fluid>
  <Row><Col>
  <h5>Total Users</h5>
        <span>List</span></Col></Row>
        <Row>
          <Col>
          <div className="user_box">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th className="head_1">#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile no.</th>
            <th>Total applied</th>
            <th>Total Selection</th>
            <th></th>
            <th className="head_last"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td> <span className="user"><img src="./images/user.png" alt="" /></span> <span className="user_nme">Amelia</span></td>
            <td>example@gmail.com</td>
            <td>+1 345774677</td>
            <td>56</td>
            <td>78</td>
            <td></td>
            <td><Button  className="login_btn" type="" onClick={() => setshowdivs("user")} >
                View Details
              </Button></td>
          </tr>
          <tr>
            <td>2</td>
            <td> <span className="user"><img src="./images/user.png" alt="" /></span> <span className="user_nme">Amelia</span></td>
            <td>example@gmail.com</td>
            <td>+1 345774677</td>
            <td>56</td>
            <td>78</td>
            <td></td>
            <td><Button  className="login_btn" type="" onClick={() => setshowdivs("user")}>
                View Details
              </Button></td>
          </tr>
          <tr>
            <td>3</td>
            <td> <span className="user"><img src="./images/user.png" alt="" /></span> <span className="user_nme">Amelia</span></td>
            <td>example@gmail.com</td>
            <td>+1 345774677</td>
            <td>56</td>
            <td>78</td>
            <td></td>
            <td><Button  className="login_btn" type="" onClick={() => setshowdivs("user")}>
                View Details
              </Button></td>
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
