import React from "react";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button className="scroll-to-top-button" onClick={scrollToTop}>
      <span className="visually-hidden">Scroll to top</span>
      <i className="bi bi-arrow-bar-up"></i>
    </button>
  );
};

export default ScrollToTopButton;
