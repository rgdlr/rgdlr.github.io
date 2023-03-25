import { WebGLRenderer } from "../three.module.js";

export const webGlRenderer = new WebGLRenderer({ antialias: true });
webGlRenderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(webGlRenderer.domElement);
