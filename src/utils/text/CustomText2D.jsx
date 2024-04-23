import { Html, Text } from "@react-three/drei";

const CustomText2D = (props) => {
    const text = "" + props.text;

    return (
        <Text
            textAlign="center"
            position={props.position}
            rotation={props.rotation}
            size={props.size}

        >
            {text}
        </Text>
    )
}
export default CustomText2D;
