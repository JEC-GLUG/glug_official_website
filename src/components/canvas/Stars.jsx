import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../CanvasLoader";

const Stars = ({ isMobile }) => {
  const stars = useGLTF("./space/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.6} groundColor='black' />
      <spotLight
        position={[-150, 80, -20]}
        angle={0.20}
        penumbra={1}
        intensity={5}
        shadow-mapSize={1024}
      />
      <primitive
        object={stars.scene}
        scale={isMobile ? 40 : 50}
        position={isMobile ? [0, -3, -2.2] : [-100, -100, 10]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const StarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 200], fov: 12 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={0}
          minPolarAngle={0}
        />
        <Stars isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default StarsCanvas;