import { useMemo } from "react"

export default function useMovements() {
    const MOVEMENTS = {
        forward: "forward",
        backward: "backward",
        leftward: "leftward",
        rightward: "rightward",
        jump: "jump",
        exit: "exit",
        run: "run",
        dance: "dance",
        basic_attack: "basic_attack"
    }

    const map = useMemo(() => {
        return [
            { name: MOVEMENTS.forward, keys: ["KeyW", "ArrowUp"] },
            { name: MOVEMENTS.backward, keys: ["KeyS", "ArrowDown"] },
            { name: MOVEMENTS.leftward, keys: ["KeyA", "ArrowLeft"] },
            { name: MOVEMENTS.rightward, keys: ["KeyD", "ArrowRight"] },
            { name: MOVEMENTS.jump, keys: ["Space"] },
            { name: MOVEMENTS.exit, keys: ["Escape"] },
            { name: MOVEMENTS.run, keys: ["Shift"] },
            { name: MOVEMENTS.dance, keys: ["KeyQ"] },
            { name: MOVEMENTS.basic_attack, keys: ["KeyR"] }
        ]
    }, [])

    return map;
}