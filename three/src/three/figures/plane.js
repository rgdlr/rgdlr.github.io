import {
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
} from "../three.module.js";

const planeGeometry = new PlaneGeometry(10, 10);

const meshBasicMaterial = new MeshBasicMaterial({ color: 0xffffff, side: DoubleSide });
export const basicPlane = new Mesh(planeGeometry, meshBasicMaterial);

basicPlane.position.set(0, -1, 0);
basicPlane.rotation.x += Math.PI * 0.5;

const meshStandardMaterial = new MeshStandardMaterial({ color: 0xffffff, side: DoubleSide });
export const standardPlane = new Mesh(planeGeometry, meshStandardMaterial);

standardPlane.position.set(0, -1, 0);
standardPlane.rotation.x += Math.PI * 0.5;
