import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

export default function WorldLevel4(props) {
    const { nodes, materials } = useGLTF("/assets/models/world/temple.glb");
    console.log(nodes);

    return (
        <group {...props} dispose={null}>
            <group>
                <RigidBody type="fixed" colliders="trimesh">
                    <mesh receiveShadow={true} geometry={nodes.Superface.geometry} material={materials.floorMaterial} />
                </RigidBody>
            </group>
        </group>
    );
}

useGLTF.preload("/assets/models/world/temple.glb");
