import { DoubleSide, Mesh, MeshBasicMaterial, PlaneGeometry } from "../three.module.js";

const planeGeometry = new PlaneGeometry(5, 5);

const meshBasicMaterial = new MeshBasicMaterial({ color: 0xffffff, side: DoubleSide });
export const basicPlane = new Mesh(planeGeometry, meshBasicMaterial);

basicPlane.position.set(0, -1, 0);
basicPlane.rotation.x += Math.PI * 0.5;
