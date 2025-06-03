import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-bg">
      <div className="loadingio-spinner">
        <div className="spinner-ball"></div>
        <div className="spinner-ball spinner2"></div>
        <div className="spinner-ball spinner3"></div>
        <div className="spinner-ball spinner4"></div>
      </div>
      <h2 className="text-glow">Loading dulu...</h2>
    </div>
  );
}
