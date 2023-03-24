import { perspectiveCamera } from "./three/basic/camera.js";
import { ambientDirectionalLight } from "./three/basic/light.js";
import { recorder } from "./three/basic/recorder.js";
import { webGlRenderer } from "./three/basic/renderer.js";
import { resize } from "./three/basic/resize.js";
import { scene } from "./three/basic/scene.js";
import { standardCube } from "./three/shapes/cube.js";

standardCube.name = "main-cube";

scene.add(standardCube);
scene.add(ambientDirectionalLight);

ambientDirectionalLight.position.set(0, 2, 5);

perspectiveCamera.position.set(2, 2, 2);
perspectiveCamera.lookAt(standardCube.position);

recorder(() => {
  standardCube.rotation.y += 0.01;
  webGlRenderer.render(scene, perspectiveCamera);
});

resize.start(webGlRenderer);
