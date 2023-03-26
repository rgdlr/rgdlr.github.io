import { animationController } from "./three/controllers/animation.js";
import { characterController } from "./three/controllers/character.js";
import { keyController } from "./three/controllers/key.js";
import { modeController } from "./three/controllers/mode.js";
import { moveController } from "./three/controllers/move.js";
import { rotationController } from "./three/controllers/rotation.js";
import { standardBox } from "./three/figures/box.js";
import { basicPlane } from "./three/figures/plane.js";
import { botLoader } from "./three/models/characters/bot/bot-loader.js";
import { perspectiveCamera } from "./three/tools/camera.js";
import { keyListener } from "./three/tools/key-listener.js";
import { ambientDirectionalLight } from "./three/tools/light.js";
import { recorder } from "./three/tools/recorder.js";
import { webGlRenderer } from "./three/tools/renderer.js";
import { resize } from "./three/tools/resize.js";
import { scene } from "./three/tools/scene.js";

standardBox.name = "main-cube";

scene.add(ambientDirectionalLight);
scene.add(standardBox);
scene.add(basicPlane);

ambientDirectionalLight.position.set(0, 2, 5);

perspectiveCamera.position.set(0, 3, -3);
perspectiveCamera.lookAt(standardBox.position);

// webGlRenderer.setAnimationLoop();
//
// cameraMovements(perspectiveCamera);
// objectMovements(standardBox);
// objectFollow(perspectiveCamera, standardBox);

botLoader().then((bot) => {
  scene.add(bot);
  characterController.setCharacter(bot);
  characterController.add(keyController);
  characterController.add(moveController);
  characterController.add(animationController);
  characterController.add(modeController);
  characterController.add(rotationController);
  characterController.start();
  recorder.add(() => {
    const { x, y, z } = bot.position;
    perspectiveCamera.position.set(x, y + 3, z - 3);
    perspectiveCamera.lookAt(bot.position);
  });
});

recorder.add(() => {
  if (keyListener.isPressed(["r", "R"])) {
    standardBox.rotation.y += 0.025;
  }
  webGlRenderer.render(scene, perspectiveCamera);
});

resize.start(webGlRenderer);
recorder.start();
keyListener.start();
characterController.start();
