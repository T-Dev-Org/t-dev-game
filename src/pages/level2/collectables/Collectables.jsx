// [Collectables.jsx]
import DiamondCone from "./DiamondCone"

export default function Collectables() {

  return (
    <>
      <DiamondCone position={[2, 0, 0]} />
      <DiamondCone position={[-2, 0, 0]} />
    </>
  );
}