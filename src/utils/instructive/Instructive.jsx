// [Instructive.jsx]
import "./instructive.css"
import React, { useRef } from "react";
import { Html } from "@react-three/drei";

const Instructive = () => {
  const imgRef = useRef();

  const pathImagenes = "./assets/images/instructives/";


  const teclaSalto = "'Espacio'"
  const teclaCorrer = "'Shift'"
  const teclaDance = "'Q'"

  const textOptions = [
    `Tip: Presiona ${teclaCorrer} mientras te mueves para correr o no correras`,
    `Tip: Manten presionado ${teclaSalto} para saltar más alto`,
    `Tip: Mientras camines te moverás más lento que si corres.`,
    `Tip: Los NPC tienen una vida muy corta gracias a ti.`,
    `Tip: Evita los obstáculos para llegar más lejos.`,
    `Tip: Presiona ${teclaCorrer} mientras te mueves para correr o no correras`,
    `Tip: Manten presionado ${teclaSalto} para saltar más alto`,
    `Tip: Mientras saltas no puedes bailar.`,
    `Tip: No te preocupes, este gato también cae parado.`,
    `Tip: Presiona ${teclaCorrer} mientras te mueves para correr o no correras`,
    `Tip: Manten presionado ${teclaSalto} para saltar más alto`,
    `Tip: Si no golpeas no harás daño.`,
    `Tip: Si te golpean te harán daño, no dejes que te golpeen`,
    `Tip: Manten presionado ${teclaDance} para celebrar`,
  ];

  const imageOptions = [
    "level2_1",
    "level2_2",
    "level2_3",
    "level2_4",
    "level2_5",
    "level2_6",
    "level2_7",
  ]

  const randomIndex = Math.floor(Math.random() * imageOptions.length);
  const randomIndexText = Math.floor(Math.random() * textOptions.length);

  const selectedText = textOptions[randomIndexText];

  return (
    <Html fullscreen>
      <div className="container-instructive">
        <h1 className="superior-left-text">Cargando...</h1>
        <img
          ref={imgRef}
          src={`${pathImagenes}${imageOptions[randomIndex]}.png`}
          alt="Instructive"
        />
        <h1 className="inferior-right-text">{selectedText}</h1>
      </div>
    </Html>
  );
};

export default Instructive;
