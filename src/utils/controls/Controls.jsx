import { useKeyboardControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useAvatar } from "../../context/AvatarContext";
import { useCharacterInteraction } from "../components/controller/CharacterInteractionState";
import { useAudio } from "../../context/AudioContext";

const debug = true

function print_debug(text) {
  if (debug) {
    console.log(`[Controls.jsx]: ${text}`);
  }
}

export default function Controls() {
  const { avatar, setAvatar } = useAvatar();
  const [sub, get] = useKeyboardControls()
  const [danceSound] = useState(new Audio("/assets/sounds/catActions/dance.wav"))
  const [play, setPlay] = useState(false)
  const { playSoundEffect } = useAudio();

  useEffect(() => {
    const unsubscribe = sub(
      (state) => ({ movement: state.forward || state.backward || state.leftward || state.rightward, running: state.run, jumping: state.jump, dancing: state.dance, interacting: state.interact }), // Devolver un objeto con los estados relevantes
      ({ movement, running, jumping, dancing, interacting }) => { // Recibir los estados relevantes como parámetros del callback
        if (interacting) {
          const { action } = useCharacterInteraction.getState();
          if (action) {
            action();
            playSoundEffect('shutterSound');
          } else {
            print_debug("No hay función de interacción asignada.");
          }
        }
        else if (jumping) {
          setAvatar({ ...avatar, animation: "Jump" });
        }
        else if (!movement && dancing) {
          setAvatar({ ...avatar, animation: "Dance" });
        }
        else if (running && movement) {
          setAvatar({ ...avatar, animation: "Running" });
        }
        else if (movement) {
          setAvatar({ ...avatar, animation: "Walk" });
        }
        else {
          setAvatar({ ...avatar, animation: "Idle" });
        }
      }
    );
    return () => unsubscribe();
  }, [avatar, setAvatar, sub]);

  useEffect(() => {
    if (play) {
      danceSound.currentTime = 0;
      danceSound.loop = true
      danceSound.play()
    } else {
      danceSound.loop = true
      danceSound.pause()
    }
  }, [play])

  useFrame(() => {
    const { forward, backward, leftward, rightward, dance } = get()
    if (dance) {
      setPlay(true)
    } else {
      setPlay(false)
    }
    const pressed = get().back
  })
}