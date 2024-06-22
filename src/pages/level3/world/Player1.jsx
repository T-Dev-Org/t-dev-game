import Ecctrl from "ecctrl";
import {useRef} from "react";
import { socket } from "../../../socket/socket-manager";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import Avatar from "../../../utils/avatar/Avatar";
import useCharacterPositionState from "../../../utils/components/controller/CharacterPositionState";

/**
 * Player1 component controls a player character in a 3D environment.
 * It handles movement and communication with a server via WebSockets.
 *
 * @component
 * @returns {JSX.Element} The Player1 component.
 */

export default function Player1( {actualPosition} ) {
    // Refs for the rigid body and the player mesh
    const rbPlayer1Ref = useRef();
    const player1Ref = useRef();

    // Keyboard controls
    const [sub, get] = useKeyboardControls();

    // useFrame hook to handle per-frame updates
    useFrame(() =>{
        // Get current keyborad input states
        const { forward, backward, leftward, rightward} = get();

        // If any movement keys are pressed, emit the players movement data to the server
        if (forward || backward || leftward || rightward) {
            window.setTimeout(() => {
                socket.emit("player-moving", {
                  translation: rbPlayer1Ref.current?.translation(),
                  rotation: rbPlayer1Ref.current?.rotation(),
                });
              }, 100);
            }
    });

    return (
    <Ecctrl ref={rbPlayer1Ref}
        camInitDis={-2}
        camMaxDis={-2}
        maxVelLimit={4}
        jumpVel={3}
        position={actualPosition}
        slopeMaxAngle={Math.PI / 5.5}
    >
        <Avatar />
      </Ecctrl>
    )
}