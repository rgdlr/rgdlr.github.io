import { BoxGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial } from "../three.module.js";

const boxGeometry = new BoxGeometry(1, 1, 1);

const meshBasicMaterial = new MeshBasicMaterial({ color: 0xffffff });
export const basicBox = new Mesh(boxGeometry, meshBasicMaterial);

const meshStandardMaterial = new MeshStandardMaterial({ color: 0xffffff });
export const standardBox = new Mesh(boxGeometry, meshStandardMaterial);
