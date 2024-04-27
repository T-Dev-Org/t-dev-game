import { Environment } from "@react-three/drei";

export default function Environments() {
    return (
        <Environment
            // files={"/assets/textures/hdris/antumn_field_puresky/1k.hdr"} // Importar como HDR
            path="/assets/textures/cubemaps/sandsloot/"
            files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
            preset={null}
            background={false}
            ground={{
                height: 20,
                scale: 500,
                radius: 500
            }}
        />
    )
}