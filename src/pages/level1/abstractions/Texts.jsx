import CustomText2D from '../../../utils/text/CustomText2D'
import CustomText3D from '../../../utils/text/CustomText3D'
import { useState, useEffect } from 'react'
import { useLifeState } from '../../../utils/components/controller/CharacterLife'

const debug = false

function print_debug (text) {
  if (debug) {
    console.log(`[Texts.jsx]: ${text}`)
  }
}

const Texts = (props) => {
  const text = '' + props.text
  const lifeState = useLifeState()
  const [displayLife, setDisplayLife] = useState(true)

  useEffect(() => {
    if (lifeState.value <= 0) {
      setDisplayLife(false)
      print_debug('Mori')
    } else {
      setDisplayLife(true)
    }
  }, [lifeState.value])

  return (
    <>
      <CustomText3D
        size={1}
        position={[0, 2, -1]}
        rotation={[0, Math.PI, 0]}
        text='Nivel 1'
      />
      <CustomText2D
        fontSize={0.5}
        color='Black'
        position={[0, -0.2, -6]}
        rotation={[Math.PI / -2, 0, 0]}
        text='Usa W, A, S, D para moverte'
      />
      <CustomText2D
        fontSize={0.5}
        color='Black'
        position={[0, -0.4, -11.9]}
        rotation={[Math.PI / -2, 0, 0]}
        text='Avanza mientras pulsas shift para correr'
      />
      <CustomText2D
        fontSize={0.5}
        color='Black'
        position={[0, -0.4, -17.8]}
        rotation={[Math.PI / -2, 0, 0]}
        text='Pulsa espacio para saltar'
      />
      <CustomText3D
        size={0.6}
        position={[0.7, 1, -38]}
        rotation={[0, 0, 0]}
        text='Bien Hecho!'
      />
      <CustomText2D
        fontSize={0.5}
        color='Grey'
        position={[-0.5, -0.4, -43]}
        rotation={[Math.PI / -2, 0, 0]}
        text='Protip: Si saltas mientras corres, saltas más alto'
      />
      <CustomText2D
        fontSize={0.5}
        color='Black'
        position={[-0.5, -0.4, -55]}
        rotation={[Math.PI / -2, 0, 0]}
        text='Hagamos un pequeño parkour'
      />
      <CustomText2D
        fontSize={0.5}
        color='Black'
        position={[-0.5, -0.4, -54]}
        rotation={[Math.PI / -2, 0, 0]}
        text='para practicar lo aprendido :)'
      />
      <CustomText2D
        fontSize={5}
        color='Black'
        position={[-0.3, 5, -75]}
        rotation={[Math.PI / -2, 0, Math.PI / -2]}
        text=':)'
      />
      <CustomText2D
        fontSize={5}
        color='Black'
        position={[-0.3, 4.6, -89.7]}
        rotation={[Math.PI / -2, 0, Math.PI / -2]}
        text=':)'
      />
      <CustomText2D
        fontSize={0.5}
        color='Black'
        position={[0, -0.2, -116]}
        rotation={[Math.PI / -2, 0, 0]}
        text='Usa R para atacar a los enemigos'
      />
      <CustomText2D
        fontSize={0.5}
        color='Black'
        position={[0, -0.2, -124]}
        rotation={[Math.PI / -2, 0, 0]}
        text='Usa T para realizar tu ataque especial'
      />
      <CustomText2D
        fontSize={0.5}
        color='Black'
        position={[0, -0.2, -154]}
        rotation={[Math.PI / -2, 0, 0]}
        text='Usa E para interactuar'
      />
      <CustomText3D
        size={0.5}
        position={[0.8, 1, -217.5]}
        rotation={[0, 0, 0]}
        text='Pulsa Q para celebrar'
      />
    </>
  )
}
export default Texts
