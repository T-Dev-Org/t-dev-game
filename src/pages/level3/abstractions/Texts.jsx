import CustomText2D from "../../../utils/text/CustomText2D";
import CustomText3D from "../../../utils/text/CustomText3D";

const Texts = (props) => {
  const text = "" + props.text;

  return (<>
    <CustomText3D
      size={1}
      position={[-6, 2, -45]}
      rotation={[0, Math.PI, 0]}
      text="Which way..?" />
  </>
  )
}
export default Texts;
