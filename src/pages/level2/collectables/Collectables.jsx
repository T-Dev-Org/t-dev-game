// [Collectables.jsx]
import DiamondCone from "./DiamondCone"
import { useDiamondState } from "./DiamondCone";

export default function Collectables() {

  return (
    <>
      {!useDiamondState("diamond1").isTaked && (
        <DiamondCone name="diamond1" position={[2, 0, 0]} />
      )}
      {!useDiamondState("diamond2").isTaked && (
        <DiamondCone name="diamond2" position={[0, 0, 2]} />
      )}
      {/* Agrega más instancias de DiamondCone con identificadores únicos */}
    </>
  );
}