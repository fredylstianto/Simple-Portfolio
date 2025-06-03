import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="about-card slideUp-animation">
              <Card.Body>
                <h2 className="about-title mb-3">About Me</h2>
                <p className="about-desc">
                  👋 Hi, I'm <b>Fredy Lie</b>. I'm build beautiful, interactive, and high-performance websites with passion.<br/>
                  <br/>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
} 