import CustomText2D from "../../../utils/text/CustomText2D";
import CustomText3D from "../../../utils/text/CustomText3D";

const Texts = (props) => {
  const text = "" + props.text;

  return (<>
    <CustomText3D
      size={1}
      position={[2.5, 3, 8]}
      rotation={[0, Math.PI / -1.2, 0]}
      text="Nivel 2" />
    <CustomText2D
      position={[28, 0.1, -7]}
      rotation={[Math.PI / -2, 0, 0]}
      text="Checkpoint 1" />
    <CustomText2D
      position={[40, 8.6, -45]}
      rotation={[Math.PI / -1.95, 0, Math.PI / -2]}
      text="Checkpoint 2" />
    <CustomText2D
      position={[36, 0.4, -157]}
      rotation={[Math.PI / -2, 0, Math.PI / -1.8]}
      text="Checkpoint 3" />
    <CustomText2D
      position={[-24, 0.1, -150]}
      rotation={[Math.PI / -2, 0, Math.PI / 2.18]}
      text="Checkpoint 4" />
  </>
  )
}
export default Texts;
