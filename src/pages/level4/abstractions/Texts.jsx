import { Center, Float, Text3D } from '@react-three/drei'

const Texts = (props) => {
  const text = 'LEVEL 4'

  return (
    <Float>
      <Center position={props.position} rotation={[0, Math.PI, 0]}>
        <Text3D
          font='/assets/fonts/SquidGamesFont.json'
          bevelThickness={0.01}
          height={0.1}
          letterSpacing={0.05}
          size={1}
        >
          <meshNormalMaterial />
          {text}
        </Text3D>
      </Center>
    </Float>
  )
}
export default Texts
