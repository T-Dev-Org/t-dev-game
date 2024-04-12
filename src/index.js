import "./styles.css";
import { createRoot } from "react-dom/client";
import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import React from "react";

const root = createRoot(document.getElementById("root"));

root.render(
    <>
        {/* <WelcomeView /> */}
        <Canvas
            camera={{
                position: [0, 1, 1.5],
                rotation: [0, 0, 0]
            }}
            shadows={true}
        >
            <Experience />
        </Canvas>
        <Loader />
    </>
);
