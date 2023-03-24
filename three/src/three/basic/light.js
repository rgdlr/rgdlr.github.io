import { AmbientLight, DirectionalLight, Light } from "../three.module.js";

export const ambientLight = new AmbientLight(0x404040);

export const directionalLight = new DirectionalLight(0xffffff, 0.5);

export const ambientDirectionalLight = new Light(0x000000);
ambientDirectionalLight.add(ambientLight);
ambientDirectionalLight.add(directionalLight);
