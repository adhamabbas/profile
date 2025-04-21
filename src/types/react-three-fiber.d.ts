import { GroupProps, MeshProps, AmbientLightProps, PointLightProps } from '@react-three/fiber'
import { OctahedronGeometry, BoxGeometry } from 'three'

declare module '@react-three/fiber' {
  interface ThreeElements {
    group: GroupProps
    mesh: MeshProps
    octahedronGeometry: any
    boxGeometry: any
    ambientLight: AmbientLightProps
    pointLight: PointLightProps
    line: any
    float: any
    trail: any
    meshDistortMaterial: any
  }
} 