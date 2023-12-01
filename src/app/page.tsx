"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import Cube from "./cube.json";

export default function Home() {
  return (
    <div className="bg-slate-200 h-screen overflow-hidden flex justify-center items-center w-full tracking-tighter text-black ">
      <div className="fixed top-0 left-0 p-2 flex justify-end w-full">
        <div className="flex gap-2">
          <a href="https://kiki.club/" target="_blank">
            Kiki
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
        </div>
      </div>

      <div className="relative w-full max-w-2xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-lg opacity-60 animate-blob animation-delay-1000" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-lg opacity-60 animate-blob animation-delay-2000" />
        <div className="absolute top-28 left-8 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-lg opacity-60 animate-blob animation-delay-5000" />
      </div>

      <div className="fixed bottom-0 left-0 p-2 flex justify-between w-full">
        <h1>Jacob Binnie</h1>

        <div className="flex gap-2">
          <h2>Software Engineer</h2>
          <h2>New York City</h2>
        </div>
      </div>
    </div>
  );
}
