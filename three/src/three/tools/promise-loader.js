export class PromiseLoader {
  loader;
  callback;

  constructor(loader, callback) {
    this.loader = loader;
    this.callback = callback;
  }

  load(url) {
    const loader = new this.loader();
    return new Promise((resolve) => {
      loader.load(url, (object) => {
        resolve(this.callback(object));
      });
    });
  }
}
