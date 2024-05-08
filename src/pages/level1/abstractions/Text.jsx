import CustomText2D from "../../../utils/text/CustomText2D";
import CustomText3D from "../../../utils/text/CustomText3D";

const Texts = (props) => {
  const text = "" + props.text;

  return (
    <>
      <CustomText3D
        size={1}
        position={[0, 2, -1]}
        rotation={[0, Math.PI, 0]}
        text="Nivel 1"
      />
      <CustomText2D
        fontSize={0.5}
        color="Black"
        position={[0, -0.2, -6]}
        rotation={[Math.PI / -2, 0, 0]}
        text="Usa W, A, S, D o tus flechas para moverte"
      />
      <CustomText2D
        fontSize={0.5}
        color="Black"
        position={[0, -0.4, -11.9]}
        rotation={[Math.PI / -2, 0, 0]}
        text="Avanza mientras pulsas shift para correr"
      />
      <CustomText2D
        fontSize={0.5}
        color="Black"
        position={[0, -0.4, -17.8]}
        rotation={[Math.PI / -2, 0, 0]}
        text="Pulsa espacio para saltar"
      />
      <CustomText3D
        size={0.6}
        position={[0.7, 1, -40]}
        rotation={[0, 0, 0]}
        text="Bien Hecho!"
      />
      <CustomText2D
        fontSize={0.5}
        color="Black"
        position={[-0.5, -0.4, -55]}
        rotation={[Math.PI / -2, 0, 0]}
        text="Hagamos un pequeño parkour"
      />
      <CustomText2D
        fontSize={0.5}
        color="Black"
        position={[-0.5, -0.4, -54]}
        rotation={[Math.PI / -2, 0, 0]}
        text="para practicar lo aprendido :)"
      />
      <CustomText2D
        fontSize={5}
        color="Black"
        position={[-0.3, 5, -75]}
        rotation={[Math.PI / -2, 0, Math.PI / -2]}
        text=":)"
      />
      <CustomText2D
        fontSize={5}
        color="Black"
        position={[-0.3, 4.6, -89.7]}
        rotation={[Math.PI / -2, 0, Math.PI / -2]}
        text=":)"
      />
    </>
  );
};
export default Texts;
