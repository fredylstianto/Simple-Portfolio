import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import "./Hero.css";

export default function Hero() {
  const typingTexts = [
    "Frontend Engineer",
    "UI/UX Enthusiast"
  ];
  const [typedText, setTypedText] = useState("");
  const [line, setLine] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer = null;
    const currentText = typingTexts[line];
    if (!isDeleting && charIdx <= currentText.length) {
      setTypedText(currentText.slice(0, charIdx));
      timer = setTimeout(() => setCharIdx(c => c + 1), 80);
    } else if (!isDeleting && charIdx > currentText.length) {
      timer = setTimeout(() => setIsDeleting(true), 3000); // Pause after typed
    } else if (isDeleting && charIdx >= 0) {
      setTypedText(currentText.slice(0, charIdx));
      timer = setTimeout(() => setCharIdx(c => c - 1), 60);
    } else if (isDeleting && charIdx < 0) {
      setIsDeleting(false);
      setLine(l => (l + 1) % typingTexts.length);
      setCharIdx(0);
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [charIdx, isDeleting, line, typingTexts]);

  return (
    <section id="home" className="hero-section d-flex align-items-center justify-content-center">
      <Container className="hero-content text-center">
        <div className="glow-circle"></div>
        <h1 className="display-3 animate-hero-title">
          Hi, I'm <span className="hero-highlight">Fredy Lie</span>
        </h1>
        <div className="lead animate-hero-desc" style={{ minHeight: 55 }}>
          <span className="colorful typing-cursor">
            {typedText}
          </span>
        </div>
        <Button className="btn-glow mt-3 bounceBtn" size="lg" href="#projects">
          Explore Projects
        </Button>
      </Container>
    </section>
  );
}