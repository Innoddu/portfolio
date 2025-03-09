import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import "../styles/Contact.css";

export function Contact() {
  return (
    <Container fluid id="contact" className="contact min-vh-100">
        <Container className="text-center d-flex flex-column align-items-center" style={{paddingTop: '120px'}}>
            <h2 className="display-6 neon-head custom-underline " style={{ letterSpacing: '5px'}}>
                Contact
            </h2>
        </Container>
      <Container className="form-container">
        <Form 
          action="https://formspree.io/f/xrgwrayl" 
          method="POST"
          className="contact-form"
        >
          <Form.Group controlId="formName" className="form-group">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter your name" 
              name="name" 
              required 
            />
          </Form.Group>
          <Form.Group controlId="formEmail" className="form-group">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter your email" 
              name="_replyto" 
              required 
            />
          </Form.Group>
          <Form.Group controlId="formMessage" className="form-group">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={4} 
              placeholder="Your message" 
              name="message" 
              required 
            />
          </Form.Group>
          <Button className="send-btn" type="submit">
            Send
          </Button>
        </Form>
      </Container>
    </Container>
  );
}
