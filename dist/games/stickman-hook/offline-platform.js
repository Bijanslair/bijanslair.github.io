// Compatibility for the game build when played without the original platform SDK.
const noop = () => {};
window.PokiSDK = {
  init: () => Promise.resolve(),
  commercialBreak: () => Promise.resolve(),
  rewardedBreak: () => Promise.resolve(false),
  destroyAd: noop,
  displayAd: noop,
  gameLoadingFinished: noop,
  gameLoadingStart: noop,
  gameplayStart: noop,
  gameplayStop: noop,
  happyTime: noop,
  setDebug: noop
};
