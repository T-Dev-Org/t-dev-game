// [Instructive.jsx]
import "./instructive.css"
import React, { useRef } from "react";
import { Html } from "@react-three/drei";

const Instructive = () => {
  const imgRef = useRef();

  const textOptions = [
    "Tip: Mientras camines te moverás más lento que si corres.",
    "Tip: Los NPC tienen una vida muy corta gracias a ti.",
    "Tip: Evita los obstáculos para llegar más lejos.",
    "Tip: Mientras saltas no puedes bailar.",
    "Tip: No te preocupes, este gato también cae parado.",
    "Tip: Si no golpeas no harás daño.",
    "Tip: Si te golpean te harán daño, no dejes que te golpeen",
  ];
  const imagenesDisponibles = 3

  const randomIndex = Math.floor(Math.random() * imagenesDisponibles) + 1;
  const randomIndexText = Math.floor(Math.random() * textOptions.length) + 1;

  const selectedText = textOptions[randomIndexText];

  return (
    <Html fullscreen>
      <div className="container-instructive">
        <h1 className="superior-left-text">Cargando...</h1>
        <img
          ref={imgRef}
          src={`./assets/images/instructive${randomIndex}.png`}
          alt="Instructive"
        />
        <h1 className="inferior-right-text">{selectedText}</h1>
      </div>
    </Html>
  );
};

export default Instructive;
