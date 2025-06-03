import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Projects.css";

const projects = [
  {
    title: "UMKM Santui",
    desc: "A web app for my friends to easily record deposits and view transaction history.",
    img: "https://i.postimg.cc/Pqshp8y8/image.png",
    link: ""
  },
  {
    title: ":)",
    desc: "Cerita tidak akan jadi cerita jika tidak ada yang mendengarkan.",
    img: "https://symbols.getvecta.com/stencil_190/10_slightly-smiling-face.2b4ac1bcf8.png",
    link: "#"
  },
  {
    title: "CBB",
    desc: "A simple web app that helps you check your weight status—whether it's underweight, ideal, or overweight—based on general standards.",
    img: "https://i.postimg.cc/8kJSHHYr/image.png",
    link: "https://cbb-rouge.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="projects-title mb-5 slideLeftAnim">Featured Projects</h2>
        <Row className="g-4">
          {projects.map((p,idx)=>(
            <Col lg={4} md={6} key={idx}>
              <Card className="project-card fadeUpAnim" style={{animationDelay: `${0.28+idx*0.13}s`, animationFillMode:'forwards'}}>
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  <Card.Img variant="top" src={p.img} alt={p.title} loading="lazy" className="project-img"/>
                </a>
                <Card.Body>
                  <Card.Title className="project-title">{p.title}</Card.Title>
                  <Card.Text className="project-desc">{p.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="floating-light"></div>
    </section>
  );
}