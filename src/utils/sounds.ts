import { Howl } from "howler";

export const bootSound = new Howl({
  src: ["/sounds/boot.wav"],
  volume: 0.7,
});

export const clickSound = new Howl({
  src: ["/sounds/click.wav"],
  volume: 0.4,
});

export const rainSound = new Howl({
  src: ["/sounds/rain.mp3"],
  loop: true,
  volume: 0.15,
});

export const humSound = new Howl({
  src: ["/sounds/hum.mp3"],
  loop: true,
  volume: 0.08,
});

export const glitchSound = new Howl({
  src: ["/sounds/glitch.wav"],
  volume: 0.5,
});