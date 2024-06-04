import { Color } from 'three'

const Lights = () => {
  return (
    <>
      {/** Luz del nivel */}
      <ambientLight
        color={new Color('#BE1E1E')}
        intensity={0.8}
        position={[0, 0, -100]}
      />
    </>
  )
}
export default Lights
