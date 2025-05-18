import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import profile from "../../assets/profile.png";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        minHeight: "320px",
        width: "100%",
        padding: "22rem 0 0 0",
        background: "transparent",
      }}
    >
      <img
        src={profile}
        alt='Profile'
        className='animated-profile-img'
        style={{
          width: "260px",
          height: "260px",
          maxWidth: "60vw",
          maxHeight: "60vw",
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid #fff",
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
          background: "#fff",
        }}
      />
      <style>{`
        .animated-profile-img {
          animation: floatProfile 3s ease-in-out infinite;
        }
        @keyframes floatProfile {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-24px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
};

export default ComputersCanvas;
