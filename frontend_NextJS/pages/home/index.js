import React from "react";
import dynamic from "next/dynamic";

const SectionMap = dynamic(
  () => import("@/components/index-page/section-map"),
  {
    ssr: false,
  }
);

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { BarBell } from "@/components/hh/models";

const basicScale = 2.75;

const HomePage = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          backgroundColor: "#222",
        }}
      >
        <Suspense>
          <Canvas>
            <Environment preset="studio" />
            <ambientLight preset="rembrandt" intensity={2} />
            <directionalLight intensity={2} position={[50, 5, 50]} />
            <BarBell
              scale={basicScale}
              position={[-1.5, 0, 0]}
              rotation={[0, 1, 0.5]}
            />
            <OrbitControls enableZoom={true} />
          </Canvas>
        </Suspense>
      </div>
      <section
        style={{ position: "relative", height: "100vh", pointerEvents: "none" }}
      >
        <h1
          style={{
            position: "absolute",
            fontSize: "3rem",
            top: "50%",
            right: "10%",
            color: "white",
          }}
        >
          全台灣最大的複合式健身房
        </h1>
      </section>
      <section style={{ position: "relative", height: "100vh" }}>
        <h1
          style={{
            position: "absolute",
            fontSize: "3rem",
            top: "50%",
            right: "10%",
            color: "white",
          }}
        >
          全台灣最大的複合式健身房
        </h1>
      </section>
      <SectionMap />
    </>
  );
};

HomePage.getLayout = (page) => <>{page}</>;

export default HomePage;
