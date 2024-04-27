import CustomText2D from "../../../utils/text/CustomText2D";
import CustomText3D from "../../../utils/text/CustomText3D";

const Texts = (props) => {
    const text = "" + props.text;
  
    return (<>
      <CustomText3D
        size={1}
        position={[0, 2, -1]}
        rotation={[0, Math.PI, 0]}
        text="Nivel 1" />
    </>
    )
  }
  export default Texts;
  