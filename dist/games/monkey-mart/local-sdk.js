// Supply the SDK responses for a session without an ad provider.
const noOperation = () => {};
window.PokiSDK = {
  init: () => Promise.resolve(),
  commercialBreak: () => Promise.resolve(),
  rewardedBreak: () => Promise.resolve(false),
  gameLoadingStart: noOperation, gameLoadingProgress: noOperation, gameLoadingFinished: noOperation,
  gameplayStart: noOperation, gameplayStop: noOperation, happyTime: noOperation,
  displayAd: noOperation, destroyAd: noOperation, setDebug: noOperation, customEvent: noOperation, captureError: noOperation,
  getURLParam: () => "", isAdBlocked: () => false
};
