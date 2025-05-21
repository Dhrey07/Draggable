import React, { useState, useRef } from "react";
import './App.css';

const DraggableCard = ({ initialPosition, title, content }) => {
  const cardRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(initialPosition);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = cardRef.current.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      ref={cardRef}
      className="draggable-card"
      onMouseDown={handleMouseDown}
      style={{ left: position.x, top: position.y }}
    >
      <h3>{title}</h3>
      <p>{content}</p>

      {/* Invisible full-screen overlay for drag tracking */}
      {isDragging && (
        <div
          className="drag-overlay"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
      )}
    </div>
  );
};

export default DraggableCard;
