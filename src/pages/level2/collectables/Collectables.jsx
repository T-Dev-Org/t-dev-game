import DiamondCone from "./DiamondCone"

export default function Collectables() {

  const handleOnCollect = () => {
    // Reproducir sonido
  }

  return (<>
    <DiamondCone
      name = "DiamondCone Zone 1 #1"
      position={[2, 0, 0]}
    />
  </>)
}