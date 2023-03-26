import { WebGLRenderer } from "../three.module.js";

export const webGlRenderer = new WebGLRenderer({ antialias: true });
export const webGlCanvas = webGlRenderer.domElement;

webGlRenderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(webGlCanvas);
