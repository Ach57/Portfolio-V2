import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Computer_room from "./Computer_room";

const ContactExperience = () => {
  return (
    <Canvas shadows camera={{ position: [-6, 2, 8], fov: 45 }}>
      <ambientLight intensity={0.5} color="#d9ead3" />

      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffe599" />

      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffe599"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#fff2cc" />
        </mesh>
      </group>

      <group scale={0.4} position={[2, -1, -1]} castShadow>
        <Computer_room />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
