import { perspectiveCamera } from "./three/basic/camera.js";
import { ambientDirectionalLight } from "./three/basic/light.js";
import { recorder } from "./three/basic/recorder.js";
import { webGlRenderer } from "./three/basic/renderer.js";
import { resize } from "./three/basic/resize.js";
import { scene } from "./three/basic/scene.js";
import { standardBox } from "./three/shapes/box.js";
import { basicPlane } from "./three/shapes/plane.js";

standardBox.name = "main-cube";

scene.add(ambientDirectionalLight);
scene.add(standardBox);
scene.add(basicPlane);

ambientDirectionalLight.position.set(0, 2, 5);

perspectiveCamera.position.set(2, 2, 2);
perspectiveCamera.lookAt(standardBox.position);

recorder.add(() => {
  standardBox.rotation.x += 0.01;
  standardBox.rotation.y += 0.01;
  standardBox.rotation.z += 0.01;
  basicPlane.rotation.z += 0.005;
  
  webGlRenderer.render(scene, perspectiveCamera);
});
recorder.start();

resize.start(webGlRenderer);
