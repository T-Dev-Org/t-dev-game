import { RigidBody, CuboidCollider } from '@react-three/rapier'

export default function ManualColliders() {
  return (
    <RigidBody type='fixed' colliders={false}>
      {/* Friendly colliders */}
      <CuboidCollider position={[0, -1, -10.6]} args={[3, 1, 1]} />

      <CuboidCollider
        position={[12.6, 0.2, -0.23]}
        args={[1.08, 0.2, 0.808]}
      />
      <CuboidCollider
        position={[16.1, 0.5, 1.28]}
        args={[1.05, 0.2, 0.72]}
      />
      <CuboidCollider
        position={[17.7, 0.62, -1.14]}
        args={[0.86, 0.2, 0.72]}
      />
      <CuboidCollider
        position={[19.7, 1, -3.6]}
        args={[0.88, 0.2, 0.74]}
      />

      {/* Zona 1 */}
      <CuboidCollider position={[-6, 2, -63]} args={[6.6, 2, 1]} rotation={[0, Math.PI / -1.15, 0]} />
      <CuboidCollider position={[-20.2, 2, -60]} args={[8.2, 2, 1]} rotation={[0, Math.PI / 0.98, 0]} />

      {/* Zona Checkpoint 3 */}
      <CuboidCollider position={[38.6, 2, -28]} args={[10, 2, 1]} rotation={[0, 0, 0]} />
      <CuboidCollider position={[36.6, 5, -32]} args={[12, 4, 1]} rotation={[Math.PI / -3.6, Math.PI / -0.988, 0]} />

      <CuboidCollider position={[17.6, 1.5, -31.8]} args={[12, 2, 1]} rotation={[0, Math.PI / -9.6, 0]} />
      <CuboidCollider position={[19, 3, -33.3]} args={[13, 3, 1]} rotation={[Math.PI / -3.6, Math.PI / -17, Math.PI / -16]} />

      <CuboidCollider position={[6, 2, -36]} args={[1.6, 2, 1]} rotation={[0, Math.PI / 4, 0]} />

      {/* Barrera de entrada 1 */}
      <CuboidCollider position={[-6.4, 2, -15]} args={[6, 2, 1.4]} rotation={[0, Math.PI / -1.6, 0]} />
    </RigidBody>
  )
}
