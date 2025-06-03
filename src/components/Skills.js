import React, { useState, useEffect } from "react";
import { Container, Row, Col, ProgressBar, Card } from "react-bootstrap";
import "./Skills.css";
import useInView from "./useInView";

const skillList = [
  { name: "React", level: 94, color: "info" },
  { name: "Bootstrap", level: 92, color: "primary" },
  { name: "JavaScript", level: 95, color: "warning" },
  { name: "Billiard", level: 85, color: "success" },
];

export default function Skills() {
  const [ref, inView] = useInView();
  // state yang mengontrol presentase fill animasi
  const [animatedVals, setAnimatedVals] = useState(skillList.map(() => 0));

  useEffect(() => {
    if (inView) {
      // Animate each bar with delay
      skillList.forEach((sk, i) => {
        setTimeout(() => {
          setAnimatedVals(vals =>
            vals.map((v, idx) => (idx === i ? sk.level : v))
          );
        }, 400 + i * 180);
      });
    } else {
      // Reset jika keluar viewport (optional, comment jika tidak mau reset)
      setAnimatedVals(skillList.map(() => 0));
    }
    // eslint-disable-next-line
  }, [inView]);

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <Container>
        <Row className="justify-content-center mb-4">
          <Col lg={8} className="text-center">
            <h2 className="skills-title">Skills</h2>
            <p className="skills-desc">
              <span className="skills-gradient-text">
                Tools and technologies I've mastered  
              </span>
            </p>
          </Col>
        </Row>
        <Row className="gy-4">
          <Col md={7}>
            {skillList.map((sk, i) => (
              <div className="skill-bar-container" key={sk.name}>
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span className="skill-name">{sk.name}</span>
                  <span className="skill-level">{animatedVals[i]}%</span>
                </div>
                <ProgressBar
                  className={`skill-bar ani-skill-bar color-${sk.color}`}
                  now={animatedVals[i]}
                  max={100}
                  variant={sk.color}
                  style={{
                    animationDelay: `${0.18 + i * 0.09}s`,
                    boxShadow: sk.level === animatedVals[i]
                      ? `0 0 18px 2px var(--${sk.color}-glow)` : "none"
                  }}
                />
              </div>
            ))}
          </Col>
          <Col md={5} className="d-flex justify-content-center align-items-center">
            <Card className="skills-logo-blob shadow">
              <div className="blob-animation"></div>
              <div className="main-skills-icon">
                <i className="fab fa-react fa-3x react-spin"></i>
                <i className="fab fa-js-square fa-2x ms-3 shimmer"></i>
                <i className="fab fa-css3-alt fa-2x ms-3 shimmer2"></i>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}