const loading = document.querySelector("#loading");
const container = document.querySelector("#gameContainer");

// Keep the Unity drawing buffer at its initial size when the frame resizes.
function fitGame() {
  const scale = Math.min(window.innerWidth / 960, window.innerHeight / 540);
  container.style.setProperty("--game-scale", scale);
}

fitGame();
window.addEventListener("resize", fitGame);

function showLoadError() {
  loading.hidden = false;
  loading.textContent = "Snow Rider 3D could not start. Try reloading in a browser with WebGL support.";
}

try {
  UnityLoader.instantiate("gameContainer", "Build/SnowRider3D-gd-1.json", {
    Module: {onAbort: showLoadError},
    onProgress(instance, progress) {
      loading.textContent = "Loading Snow Rider 3D… " + Math.round(progress * 100) + "%";
      loading.hidden = progress >= 1;
    }
  });
} catch (error) {
  console.error("Snow Rider 3D could not start", error);
  showLoadError();
}
