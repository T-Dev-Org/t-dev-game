import { Html, Text } from "@react-three/drei";

const CustomText2D = (props) => {
    const text = "" + props.text;

    return (
        <Text
            textAlign="center"
            position={props.position}
            rotation={props.rotation}
            fontSize={props.fontSize}
            color = {props.color}

        >
            {text}
        </Text>
    )
}
export default CustomText2D;
