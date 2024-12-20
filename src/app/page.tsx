"use client";
import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="bg-slate-200 h-screen overflow-hidden flex justify-center items-center w-full tracking-tighter text-white">
      <ShaderGradientCanvas
        importedFiber={{ ...fiber, ...drei, ...reactSpring }}
        style={{
          position: "absolute",
          top: 0,
          pointerEvents: "none",
          height: "100vh",
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23ff5005&color2=%23dbba95&color3=%23d0bce1&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=plane&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=0&wireframe=false"
        />
      </ShaderGradientCanvas>
      <div className="fixed top-0 left-0 p-4 flex items-end w-full flex-col gap-2">
        <div className="flex justify-end gap-2 flex-wrap">
          <a href="https://github.com/jacobbinnie" target="_blank">
            Github
          </a>
          <a href="https://youtube.com/@jacobsucksatcode" target="_blank">
            Youtube
          </a>
          <a href="https://instagram.com/binnie.jacob" target="_blank">
            IG
          </a>
          <a href="https://www.strava.com/athletes/jacobbinnie" target="_blank">
            Strava
          </a>
          <a href="https://linkedin.com/in/jacobbinnie" target="_blank">
            Linkedin
          </a>
          <a href="https://www.x.com/jacobbinnie" target="_blank">
            X
          </a>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 p-4 flex justify-between items-end w-full">
        <h1>Jacob Binnie</h1>

        <div className="flex flex-col items-end gap-2">
          {/* <a href="mailto:collab@jacobbinnie.com">collab@jacobbinnie.com</a> */}
          <div className="flex gap-2">
            <h2>Senior Software Engineer</h2>
            <h2>·</h2>
            <h2>London, UK</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
