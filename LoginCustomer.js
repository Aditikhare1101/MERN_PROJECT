import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useHistory } from "react-router-dom";

export default function Login() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Here you can perform any actions you need, such as making an API call
    // For now, let's just log the email and password to the console
    console.log("Email:", email);
    console.log("Password:", password);

    // After handling the form submission, you can navigate to the desired page
    history.push("/welcomecustomer");
  }

  return (
    <div className="Login">
      <h1> Customer Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
