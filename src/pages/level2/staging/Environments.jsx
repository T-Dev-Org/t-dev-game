import { Environment } from '@react-three/drei'

export default function Environments () {
  return (
    <Environment
      path='/assets/textures/cubemaps/autumn_field_puresky/'
      files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
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
