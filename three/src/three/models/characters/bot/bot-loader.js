import { FBXLoader } from "../../../addons/loaders/fbx-loader.js";
import { AnimationLoader } from "../../../animations/animation-loader.js";
import { PromiseLoader } from "../../../tools/promise-loader.js";
import { animations } from "./animations.js";

const path = "src/three/models/characters/bot/";
const modelUrl = path + "bot--x.fbx";
const animationUrls = {};

for (const [key, value] of Object.entries(animations)) {
  animationUrls[key] = path + "animations/" + value;
}

export const loadBot = () => {
  const animationLoader = new AnimationLoader(modelUrl, animationUrls);
  const promiseLoader = new PromiseLoader(FBXLoader, function (object) {
    const scale = 0.005;
    object.scale.set(scale, scale, scale);
    object.traverse(function (child) {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    object.castShadow = true;
    object.receiveShadow = true;
    return object;
  });
  animationLoader.addPromiseLoader(promiseLoader);
  return animationLoader.getModelWithAnimations();
};
