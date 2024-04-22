import { Environment } from "@react-three/drei";

export default function Environments() {

    // Importar usando el Cubemap
    // const basePath = "/assets/textures/cubemaps/autumn_field_puresky/";
    // const fileNames = ['nx', 'ny', 'nz', 'px', 'py', 'pz'];
    // const extFile = '.png';
    // const fileUrls = fileNames.map(fileName => `${basePath}${fileName}${extFile}`);

    return (
        <Environment
            // files={fileUrls} // Importar usando Cubemap (No funciona bien)
            files={"/assets/textures/hdris/antumn_field_puresky/1k.hdr"}
            preset={null}
            background={false}
            ground={{
                height: 20,
                scale: 200,
                radius: 500
            }}
        />
    )
}