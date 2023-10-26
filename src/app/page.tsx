"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import Cube from "./cube.json";

export default function Home() {
  return (
    <div className="bg-slate-200 h-screen flex justify-center items-center w-full tracking-tighter text-black ">
      <div className="fixed top-0 left-0 p-2 flex justify-end w-full">
        <div className="flex gap-2">
          <a href="https://linkedin.com/in/jacobbinnie" target="_blank">
            Linkedin
          </a>
          <a href="https://github.com/jacobbinnie" target="_blank">
            Github
          </a>
        </div>
      </div>

      <Player autoplay loop src={Cube} style={{ height: "75vh" }} />

      <div className="fixed bottom-0 left-0 p-2 flex justify-between w-full">
        <h1>Jacob Binnie</h1>

        <div className="flex gap-2">
          <h2>Software Engineer</h2>
          <h2>New York City (soon)</h2>
        </div>
      </div>
    </div>
  );
}
