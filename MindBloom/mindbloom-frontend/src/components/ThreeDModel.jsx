import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/assets/free_rubber_duck_3d_model.glb"); // Load your 3D model
  return <primitive object={scene} scale={1.5} />;
};

const ThreeDModel = () => {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 50 }}
      style={{ width: "100%", height: "400px" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDModel;
