"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const options: ISourceOptions = {
  fpsLimit: 120,
  particles: {
    move: {
      direction: MoveDirection.right,
      enable: true,
      outModes: {
        default: OutMode.out,
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 100,
    },
    opacity: {
      value: 0.35,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
};

export function ParticlesBackground() {
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    initParticlesEngine(loadSlim).then(() => {
      setInit(true);
    });
  }, []);

  return init ? <Particles className="-z-1 relative" options={options} /> : null;
}
