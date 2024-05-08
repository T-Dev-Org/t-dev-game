import { Center, Float, Text3D } from "@react-three/drei";

const Text = (props) => {
    const text = "LEVEL 4";

    return (
        <Float
            speed={1.5}
            rotationIntensity={0.01}
            floatIntensity={0.5}
            floatingRange={[1, 2]}

        >
            <Center
                position={props.position}
                rotation={[0,Math.PI, 0]}
            >
                <Text3D
                    font={"/assets/fonts/SquidGamesFont.json"}
                    bevelEnabled
                    bevelSize={0.005}
                    bevelThickness={0.01}
                    height={0.1}
                    letterSpacing={0.05}
                    size={1}
                >
                    <meshNormalMaterial />
                    {text}
                </Text3D>
            </Center>
        </Float>
    )
}
export default Text;
