import React from "react";
import { useState, useEffect } from "react";
import { useLifeState } from "../../../controller/CharacterLife";
import { Link } from "react-router-dom";
import "./PlayAgainButton.css";

const PlayAgainButton = ({ to}) => {
    const lifeState = useLifeState();

    // Estado local para controlar si se muestra la vida o no
    const [displayLife, setDisplayLife] = useState(true);        
  
    useEffect(() => {
        console.log(`[Level1.jsx] Change on LifeValue, is ${lifeState.value} now`);
  
        // Cambios en mostrar/ocultar elementos dependiendo del valor
        if (lifeState.value <= 0) {
          setDisplayLife(false);
          console.log("Mori");
        } else {
          setDisplayLife(true);
        }
      }, [lifeState.value]); // Depende unicamente de cambios en lifeState.value  

    const handleClick = () => {
        console.log('El botón ha sido clickeado!');
        lifeState.reset();
    };

    return(
        <div className="container-button-pa">
            <Link to={to} className="button-play-again" onClick={handleClick}>
                Jugar de nuevo
            </Link>
        </div>
    )
}

export default PlayAgainButton