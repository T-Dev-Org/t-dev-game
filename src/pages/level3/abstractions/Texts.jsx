import CustomText2D from '../../../utils/text/CustomText2D'
import CustomText3D from '../../../utils/text/CustomText3D'

const Texts = (props) => {
  const text = '' + props.text

  return (
    <>
      {/* Checkpoints */}
      <CustomText3D
        size={0.2}
        position={[0, 2, 1]}
        rotation={[0, Math.PI, 0]}
        text='Level 3'
      />
      <CustomText2D
        position={[-5, 0.2, -55]}
        rotation={[Math.PI / -2, 0, Math.PI / 2]}
        text='Checkpoint 1'
      />
      <CustomText2D
        position={[-5, 0.2, -85]}
        rotation={[Math.PI / -2, 0, 0]}
        text='Checkpoint 2'
      />
      <CustomText2D
        position={[0, 0.2, -162]}
        rotation={[Math.PI / -2, 0, Math.PI / 2]}
        text='Checkpoint 3'
      />
      <CustomText2D
        position={[0, 0.2, -190]}
        rotation={[Math.PI / -2, 0, 0]}
        text='Checkpoint 4'
      />
      {/* Mnesajes de ayuda/preguntas */}
      <CustomText3D
        size={0.3}
        position={[-5, 2, -85]}
        rotation={[0, 0, 0]}
        text='Recuerda explorar todo el laberinto'
      />
      <CustomText3D
        size={0.3}
        position={[-14, 2, -45]}
        rotation={[0, Math.PI / 2, 0]}
        text='A donde iras?'
      />
      <CustomText3D
        size={0.3}
        position={[-12, 2, -22]}
        rotation={[0, Math.PI, 0]}
        text='Nada por aqui...'
      />
      <CustomText3D
        size={0.3}
        position={[-10, 2, -100]}
        rotation={[0, 0, 0]}
        text='Hay algo ahi?'
      />
    </>
  )
}
export default Texts
