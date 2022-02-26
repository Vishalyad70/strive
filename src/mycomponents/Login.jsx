import React from "react";
import "./style.css";
import Img from "../images/login.png";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login_bg" style={{ backgroundImage: `url(${Img})` }}>
      <div className="overlay_black"></div>
      <div className="back_box">
        <div className="login_box">
          <div className="first_box">
            <div className="log_img">
              <img src="./images/logo.svg" alt="" />
            </div>
            <h5>Login</h5>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <p>Forgot Password?</p>
            <Link to="/Dashboard_main">
            <Button variant="primary" className="login_btn" type="submit">
                Login
              </Button>
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
