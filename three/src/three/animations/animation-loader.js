export class AnimationLoader {
  model;
  modelUrl;
  animationUrls;
  promiseLoader;

  constructor(modelUrl, animationUrls) {
    this.model = null;
    this.modelUrl = modelUrl;
    this.animationUrls = animationUrls;
  }

  addPromiseLoader(promiseLoader) {
    this.promiseLoader = promiseLoader;
  }

  getModelWithAnimations() {
    return new Promise((resolve) => {
      const animationAndModelPromises = [];
      animationAndModelPromises.push(this.promiseLoader.load(this.modelUrl));
      Object.keys(this.animationUrls).forEach((key) => {
        animationAndModelPromises.push(this.promiseLoader.load(this.animationUrls[key]));
      });
      Promise.all(animationAndModelPromises).then((payload) => {
        const model = payload.shift();
        const animationEmptyModels = payload;
        const animations = [];
        Object.keys(this.animationUrls).forEach((key) => {
          animations[key] = animationEmptyModels.shift().animations[0];
        });
        model.animations = animations;
        resolve(model);
      });
    });
  }
}
