import CustomText2D from "../../../utils/text/CustomText2D";
import CustomText3D from "../../../utils/text/CustomText3D";

const Texts = (props) => {
  const text = "" + props.text;

  return (<>
    <CustomText3D
      size={1}
      position={[-14, 2, -42]}
      rotation={[0, Math.PI/2, 0]}
      text="Which way..?" />
    <CustomText2D 
      position={[-5, 0.2, -55]}
      rotation={[Math.PI/-2, 0, Math.PI/2]}
      text="Checkpoint 1" />  
    <CustomText2D
      position={[-20, 2, -12]}
      rotation={[0, Math.PI/2, 0]}
      text="Where we are?" />
    <CustomText2D 
      position={[-5, 0.2, -85]}
      rotation={[Math.PI/-2, 0, 0]}
      text="Checkpoint 2" />
    <CustomText3D
      size={0.3}
      position={[2, 2, -80]}
      rotation={[0, Math.PI, 0]}
      text="Are these fake?" />
    <CustomText3D
      size={0.3}
      position={[5, 2, -140]}
      rotation={[0, 0, 0]}
      text="And these?" />  
    <CustomText3D
      size={0.3}
      position={[4, 2, -100]}
      rotation={[0, Math.PI, 0]}
      text="Nothing here?" />        
  </>
  )
}
export default Texts;
