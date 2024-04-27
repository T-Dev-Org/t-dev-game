import { Environment } from "@react-three/drei";

export default function Environments() {
    return (
        <Environment
            files={"/assets/textures/hdris/antumn_field_puresky/2k.hdr"}
            preset={null}
            background={false}
            ground={{
                height: 20,
                scale: 300,
                radius: 500
            }}
        />
    )
}