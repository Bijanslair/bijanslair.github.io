// Resume gameplay when the ad service is unavailable.
window.gdsdk = {
  showAd() {
    document.querySelector("#content").dispatchEvent(new Event("SDK_GAME_START"));
    return Promise.resolve();
  }
};
