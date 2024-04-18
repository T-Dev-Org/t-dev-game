import { useKeyboardControls } from "@react-three/drei";
import { useAvatar } from "../../../context/AvatarContext";
import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Controls() {
  const { avatar, setAvatar } = useAvatar();
  const [sub, get] = useKeyboardControls()
  const [runSound] = useState(new Audio("/assets/sounds/run.wav"))
  const [play, setPlay] = useState(false)

  useEffect(() => {
    const unsubscribe = sub(
      (state) => ({ movement: state.forward || state.backward || state.leftward || state.rightward, running: state.run, jumping: state.jump, dancing: state.dance }), // Devolver un objeto con los estados relevantes
      ({ movement, running, jumping, dancing }) => { // Recibir los estados relevantes como parámetros del callback
        if (jumping) {
          setAvatar({ ...avatar, animation: "Jumping" }); // Animación Jumping si state.running es true
        } else if (dancing) {
          setAvatar({ ...avatar, animation: "Dance" }); // Animación Jumping si state.running es true
        }
        else if (running) {
          setAvatar({ ...avatar, animation: "Running" }); // Animación Running si state.running es true
        } else if (movement) {
          setAvatar({ ...avatar, animation: "Walk" }); // Animación Walk si hay movimiento
        } else {
          setAvatar({ ...avatar, animation: "Idle" }); // Animación Idle si no hay movimiento ni running
        }
      }
    );
    return () => unsubscribe();
  }, [avatar, setAvatar, sub]);

  useEffect(() => {
    if (play) {
      runSound.currentTime = 0;
      runSound.volume = Math.random()
      runSound.play()
    } else {
      runSound.pause()
    }
  }, [play])

  useFrame(() => {
    const { forward, backward, leftward, rightward } = get()
    if (forward || backward || leftward || rightward) {
      setPlay(true)
    } else {
      setPlay(false)
    }
    const pressed = get().back
  })
}