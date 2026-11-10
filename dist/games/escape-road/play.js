const canvas = document.querySelector("#unity-canvas");
const loading = document.querySelector("#loading");
// Keep the game running when the optional analytics provider is absent.
const offlineAnalytics = {logEvent() {}, setUserProperties() {}};
window.firebase = {analytics: () => offlineAnalytics};
const config = {
  dataUrl: "TemplateData/data.unityweb",
  frameworkUrl: "TemplateData/framework.js",
  codeUrl: "TemplateData/wasm.unityweb",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "1games.io",
  productName: "Escape Road",
  productVersion: "2.0",
  devicePixelRatio: 1
};

canvas.addEventListener("pointerdown", () => canvas.focus());

async function launchGame() {
  try {
    await createUnityInstance(canvas, config, progress => {
      loading.textContent = "Loading Escape Road… " + Math.round(progress * 100) + "%";
    });
    loading.hidden = true;
  } catch (error) {
    console.error("Escape Road could not start", error);
    loading.textContent = "Escape Road could not start. Reload the game in a browser with WebGL support.";
  }
}

launchGame();
