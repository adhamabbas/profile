declare module '@react-three/fiber' {
  import { ReactThreeFiber } from '@react-three/fiber'
  
  interface ThreeElements {
    mesh: ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>
    boxGeometry: ReactThreeFiber.BufferGeometryNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>
    meshStandardMaterial: ReactThreeFiber.MaterialNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>
    ambientLight: ReactThreeFiber.LightNode<THREE.AmbientLight, typeof THREE.AmbientLight>
    pointLight: ReactThreeFiber.LightNode<THREE.PointLight, typeof THREE.PointLight>
  }
} 