"use client";
import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

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
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0.4&uDensity=1.5&uFrequency=0&uSpeed=0.2&uStrength=1.8&uTime=8&wireframe=false"
        />
      </ShaderGradientCanvas>
      <div className="fixed top-0 left-0 p-4 flex items-end w-full flex-col gap-2">
        <div className="flex gap-2">
          <a href="https://kiki.club/" target="_blank">
            Kiki
          </a>
          <a href="https://instagram.com/binnie.jacob" target="_blank">
            Instagram
          </a>
          <a href="https://www.strava.com/athletes/jacobbinnie" target="_blank">
            Strava
          </a>
          <a href="https://youtube.com/@jacobsucksatcode" target="_blank">
            Youtube
          </a>
          <a href="https://linkedin.com/in/jacobbinnie" target="_blank">
            Linkedin
          </a>
          <a href="https://github.com/jacobbinnie" target="_blank">
            Github
          </a>
          <a href="https://www.x.com/jacobbinnie" target="_blank">
            X
          </a>
        </div>

        <a
          className="bg-slate-100 bg-opacity-20 px-2 py-1 rounded-xl"
          href="mailto:collab@jacobbinnie.com"
          target="_blank"
        >
          Email (business enquiries only)
        </a>
      </div>

      <div className="fixed bottom-0 left-0 p-4 flex justify-between w-full">
        <h1>Jacob Binnie</h1>

        <div className="flex gap-2">
          <h2>Software Engineer</h2>
          <h2>New York City</h2>
        </div>
      </div>
    </div>
  );
}
