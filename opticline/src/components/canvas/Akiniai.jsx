import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Akiniai = () => {
  const akiniai = useGLTF("./akiniai/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[30, 30, 40]}
        angle={0.5}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={akiniai.scene}
        scale={0.4}
        position={ [0, -2, 0]}
        rotation={[0, 1.3, 0]}
      />
    </mesh>
  );
};

const AkiniuCanvas = () => {

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Akiniai />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default AkiniuCanvas;
