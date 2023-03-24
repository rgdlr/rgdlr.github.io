export const FRAME_RATE = 25;
export const FRAME_RATE_IN_MS = 1000 / FRAME_RATE;

export const recorder = (callback, { frameRateInMs } = {}) => {
  setInterval(callback, frameRateInMs ?? FRAME_RATE_IN_MS);
};
