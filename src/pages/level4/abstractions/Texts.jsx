import CustomText2D from "../../../utils/text/CustomText2D";
import CustomText3D from "../../../utils/text/CustomText3D";

const Texts = (props) => {
  const text = "" + props.text;

  return (<>
    {/*Checkpoints*/}
    <CustomText3D
      size={0.2}
      position={[0, -2, 110]}
      rotation={[0, 0, 0]}
      text="Nivel 4" />
  </>
  )
}
export default Texts;
