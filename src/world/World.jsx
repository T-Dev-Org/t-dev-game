import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier";


export default function World(props) {
    const { nodes, materials } = useGLTF("/assets/models/world/WorldExample.glb")

    return (
        <group {...props} dispose={null}>
            <group>
                <RigidBody type="fixed" colliders="trimesh">
                    <mesh onClick={(e) => e.stopPropagation()} geometry={nodes.Walls.geometry} material={materials.wallMaterial} />
                </RigidBody>
                <RigidBody type="fixed" colliders="cuboid" name="floor">
                    <mesh onClick={(e) => e.stopPropagation()} receiveShadow={true} geometry={nodes.Floor.geometry} material={materials.floorMaterial} />
                </RigidBody>
                <RigidBody type="dymanic" colliders="trimesh">
                    <mesh onClick={(e) => e.stopPropagation()} castShadow={true} geometry={nodes.WoodenFence.geometry} material={materials.woodMaterial} />
                </RigidBody>
                <RigidBody type="fixed" colliders="hull">
                    <mesh onClick={(e) => e.stopPropagation()} geometry={nodes.Tree.geometry} material={materials.treeMaterial}>
                    </mesh>
                </RigidBody>

            </group>
        </group >
    );
}

useGLTF.preload("/assets/models/world/WorldExample.glb");

