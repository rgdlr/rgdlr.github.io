import { BoxGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial } from "../three.module.js";

const boxGeometry = new BoxGeometry(1, 1, 1);

const meshBasicMaterial = new MeshBasicMaterial({ color: 0xffffff });
export const basicCube = new Mesh(boxGeometry, meshBasicMaterial);

const meshStandardMaterial = new MeshStandardMaterial({ color: 0xffffff });
export const standardCube = new Mesh(boxGeometry, meshStandardMaterial);
