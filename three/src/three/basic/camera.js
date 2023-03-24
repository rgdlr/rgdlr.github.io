import { PerspectiveCamera } from "../three.module.js";

export const perspectiveCamera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
