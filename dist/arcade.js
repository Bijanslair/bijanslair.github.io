const games = [
  {"id": "stickman-hook", "name": "Stickman Hook", "type": "Arcade", "artwork": "games/stickman-hook/images/48b008015901097a88b7803f4ad868da-title.png", "page": "games/stickman-hook/index.html", "creator": "Madbox", "license": "Build credits", "badge": "Imported", "wide": true, "description": "Hold to grab a hook. Release to swing toward the finish."},
  {"id": "ovo-2", "name": "OvO 2", "type": "Arcade", "artwork": "games/ovo-2/icons/icon-512.png", "page": "games/ovo-2/index.html", "creator": "OvO 2", "license": "Build credits", "badge": "Imported", "wide": true, "description": "Run and jump through platforming courses."},
  {"id": "planet-clicker", "name": "Planet Clicker", "type": "Arcade", "artwork": "games/planet-clicker/cover.svg", "page": "games/planet-clicker/index.html", "creator": "Coltroc", "license": "CC BY-SA 2.0", "badge": "Imported", "wide": true, "description": "Tap Earth to generate energy, buy upgrades, and unlock more planets."},
  {"id": "basketball-stars", "name": "Basketball Stars", "type": "Sports", "artwork": "games/basketball-stars/assets/images/basketball-stars.png", "page": "games/basketball-stars/index.html", "creator": "MadPuffers", "license": "Build credits", "badge": "Imported", "wide": true, "description": "Play one-on-one basketball. Choose a mode to see its controls."},
  {"id": "tiny-fishing", "name": "Tiny Fishing", "type": "Sports", "artwork": "games/tiny-fishing/cover.png", "page": "games/tiny-fishing/index.html", "creator": "Tiny Fishing", "license": "Build credits", "badge": "Imported", "wide": true, "description": "Cast your line, catch fish, and upgrade your gear."},
  {"id": "ovo", "name": "OvO", "type": "Arcade", "artwork": "games/ovo/icon-256.png", "page": "games/ovo/index.html", "creator": "Dedra Games", "license": "Build credits", "badge": "Imported", "wide": true, "description": "Run, jump, and slide through obstacle courses."},
  {"id": "monkey-mart", "name": "Monkey Mart", "type": "Arcade", "artwork": "games/monkey-mart/bg_loading.png", "page": "games/monkey-mart/index.html", "creator": "TinyDobbins", "license": "Build credits", "badge": "Imported", "wide": true, "description": "Grow crops, stock shelves, and run your own market."},
  {id:"slope", name:"Slope", type:"Arcade", artwork:"games/slope/cover.svg", page:"games/slope/index.html", creator:"Y8 Games", license:"Build credits", badge:"Imported", wide:true, description:"Keep the ball on the track and dodge red obstacles. Use the left and right arrow keys to steer."},
  {id:"snow-rider", name:"Snow Rider 3D", type:"Arcade", artwork:"games/snow-rider/cover.png", page:"games/snow-rider/index.html", creator:"Snow Rider 3D", license:"Build credits", badge:"Imported", wide:true, description:"Race downhill, collect gifts, and dodge obstacles. Use the arrow keys to steer and jump."},
  {id:"escape-road", name:"Escape Road", type:"Driving", artwork:"games/escape-road/cover.png", page:"games/escape-road/index.html", creator:"1Games.io", license:"Build credits", badge:"Imported", wide:true, description:"Steer through the city and escape the police. Click the game, then steer with A and D or the left and right arrow keys."},
  {id:"retro-bowl", name:"Retro Bowl", type:"Sports", artwork:"games/retro-bowl/img/icon.jpg", page:"games/retro-bowl/index.html", creator:"New Star Games", license:"Build credits", badge:"Imported", wide:true, description:"Manage a football team and take control on offense. Enter your coach name to start a career."},
  {id:"chrome-dino", name:"Chrome Dinosaur Game", type:"Arcade", artwork:"games/chrome-dino/icon.svg", page:"games/chrome-dino/index.html", creator:"The Chromium Authors", license:"BSD", description:"The original Chrome offline runner. Jump over cacti and duck under flying obstacles."},
  {id:"adarkroom", name:"A Dark Room", type:"Adventure", artwork:"games/adarkroom/img/adr.png", page:"games/adarkroom/index.html?ignorebrowser=true", creator:"Doublespeak Games", license:"MPL 2.0", wide:true, description:"Light the fire and see what happens in the original text adventure. Best with a wide screen."},
  {id:"2048", name:"2048", type:"Puzzle", artwork:"games/2048/meta/apple-touch-icon.png", page:"games/2048/index.html", creator:"Gabriele Cirulli", license:"MIT", description:"Use the arrow keys or swipe to slide and merge matching tiles. Can you reach 2048?"},
  {id:"hextris", name:"Hextris", type:"Puzzle", artwork:"games/hextris/images/icons/transparent-512.png", page:"games/hextris/index.html", creator:"The Hextris team", license:"GPL-3.0+", description:"Rotate the hexagon with the arrow keys or tap either side. Match three blocks of the same color."},
  {"id": "hub-sudoku", "name": "Sudoku", "type": "Puzzle", "artwork": "games/games-hub/sudoku/cover.svg", "page": "games/games-hub/sudoku/index.html", "creator": "Games Hub", "license": "MIT", "creditId": "games-hub", "badge": "Games Hub", "wide": false, "description": "Classic 9x9 number logic puzzle."},
  {"id": "hub-chess", "name": "Chess", "type": "Puzzle", "artwork": "games/games-hub/chess/cover.svg", "page": "games/games-hub/chess/index.html", "creator": "Games Hub", "license": "MIT", "creditId": "games-hub", "badge": "Games Hub", "wide": false, "description": "Classic chess vs the computer."},
  {"id": "hub-penalty", "name": "Penalty Shootout", "type": "Sports", "artwork": "games/games-hub/penalty/cover.svg", "page": "games/games-hub/penalty/index.html", "creator": "Games Hub", "license": "MIT", "creditId": "games-hub", "badge": "Games Hub", "wide": false, "description": "Aim or dive with the arrow keys. Press Space to kick or dive."},
  {"id": "hub-hex-puzzle", "name": "Hex Puzzle", "type": "Puzzle", "artwork": "games/games-hub/hex-puzzle/cover.svg", "page": "games/games-hub/hex-puzzle/index.html", "creator": "Games Hub", "license": "MIT", "creditId": "games-hub", "badge": "Games Hub", "wide": false, "description": "Place hex blocks to clear the board."},
  {"id": "hub-line-trap", "name": "Line Trap", "type": "Puzzle", "artwork": "games/games-hub/line-trap/cover.svg", "page": "games/games-hub/line-trap/index.html", "creator": "Games Hub", "license": "MIT", "creditId": "games-hub", "badge": "Games Hub", "wide": false, "description": "Trap the dot inside your line."},
  {"id": "hub-circuit-bulb", "name": "Circuit Bulb", "type": "Puzzle", "artwork": "games/games-hub/circuit-bulb/cover.svg", "page": "games/games-hub/circuit-bulb/index.html", "creator": "Games Hub", "license": "MIT", "creditId": "games-hub", "badge": "Games Hub", "wide": false, "description": "Wire circuits to light the bulb."},
  {"id": "hub-balance-stack", "name": "Balance Stack", "type": "Arcade", "artwork": "games/games-hub/balance-stack/cover.svg", "page": "games/games-hub/balance-stack/index.html", "creator": "Games Hub", "license": "MIT", "creditId": "games-hub", "badge": "Games Hub", "wide": false, "description": "Stack blocks without toppling the tower."},
  {"id": "hub-cool-platformer", "name": "Cool Platformer", "type": "Arcade", "artwork": "games/games-hub/cool-platformer/cover.svg", "page": "games/games-hub/cool-platformer/index.html", "creator": "Games Hub", "license": "MIT", "creditId": "games-hub", "badge": "Games Hub", "wide": true, "description": "Run, jump, and dash through hazards."},
  {"id": "hub-forest-runner", "name": "Forest Runner", "type": "Arcade", "artwork": "games/games-hub/forest-runner/cover.svg", "page": "games/games-hub/forest-runner/index.html", "creator": "Games Hub", "license": "MIT", "creditId": "games-hub", "badge": "Games Hub", "wide": true, "description": "Sprint through a forest — dodge logs and gaps."},
  {"id": "hub-planet-visitor", "name": "Planet Visitor", "type": "Adventure", "artwork": "games/games-hub/planet-visitor/cover.svg", "page": "games/games-hub/planet-visitor/index.html", "creator": "Games Hub", "license": "MIT", "creditId": "games-hub", "badge": "Games Hub", "wide": true, "description": "Explore alien terrain and navigate between platforms."},
];
const $ = selector => document.querySelector(selector);
const library = $("#games");
const search = $("#search");
const filters = $("#filters");
const dialog = $("#details");
const gameWindow = $("#game-window");
const fullscreenButton = $("#game-fullscreen");
const detailTitle = $("#detail-title");
const detailBody = $("#detail-body");
const categories = ["All games", "Arcade", "Driving", "Sports", "Puzzle", "Adventure"];
let saved = new Set();
try {
  const stored = JSON.parse(localStorage.getItem("game-nova-favorites") || "[]");
  if (Array.isArray(stored)) saved = new Set(stored.filter(id => games.some(game => game.id === id)));
} catch {}
let view = "all";
let category = categories[0];

for (const name of categories) {
  const button = document.createElement("button");
  button.textContent = name;
  button.addEventListener("click", () => {
    category = name;
    render();
  });
  filters.append(button);
}

function toggleFavorite(game) {
  if (saved.has(game.id)) saved.delete(game.id);
  else saved.add(game.id);
  try { localStorage.setItem("game-nova-favorites", JSON.stringify([...saved])); } catch {}
  render();
  library.querySelector('[data-favorite="' + game.id + '"]')?.focus();
  if (view === "saved" && !saved.has(game.id)) document.querySelector('[data-view="saved"]').focus();
}

function matches() {
  const term = search.value.trim().toLowerCase();
  return games.filter(game => (view === "all" || saved.has(game.id))
    && (category === categories[0] || game.type === category)
    && (game.name + " " + game.type).toLowerCase().includes(term));
}

function render() {
  for (const button of filters.children) button.setAttribute("aria-pressed", button.textContent === category);
  const results = matches();
  $("#count").textContent = results.length + (results.length === 1 ? " game" : " games");
  library.replaceChildren();
  for (const game of results) {
    const card = document.createElement("article");
    card.className = "card imported";
    card.innerHTML = '<button class="open"><img class="cover" src="' + game.artwork + '" alt=""><div class="card-info"><h3>' + game.name + '</h3><p class="meta">' + game.type + ' &nbsp;·&nbsp; ' + "Play here" + '</p></div></button><span class="badge">' + (game.badge || "Open source") + '</span><button class="heart" data-favorite="' + game.id + '"></button>';
    card.querySelector(".open").addEventListener("click", () => showGame(game));
    const heart = card.querySelector(".heart");
    heart.textContent = saved.has(game.id) ? "♥" : "♡";
    heart.setAttribute("aria-label", "Favorite " + game.name);
    heart.setAttribute("aria-pressed", saved.has(game.id));
    heart.addEventListener("click", () => toggleFavorite(game));
    library.append(card);
  }
  if (!results.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = view === "saved" && !saved.size
      ? "Tap the heart on a game to save it here."
      : "No games match. Try another search or category.";
    library.append(empty);
  }
}

document.querySelectorAll("[data-view]").forEach(button => button.addEventListener("click", () => {
  view = button.dataset.view;
  category = categories[0];
  search.value = "";
  document.querySelectorAll("[data-view]").forEach(item => item.setAttribute("aria-pressed", item === button));
  $("#library-title").textContent = view === "all" ? "Game library" : "Your favorites";
  render();
  $("#library").scrollIntoView();
}));
search.addEventListener("input", render);
$("#surprise").addEventListener("click", () => {
  const pool = matches();
  const choices = pool.length ? pool : games;
  showGame(choices[Math.floor(Math.random() * choices.length)]);
});
$("#about").addEventListener("click", () => {
  detailTitle.textContent = "About & privacy";
  detailBody.innerHTML = '<p class="dialog-copy">Bijan’s Lair hosts browser games you can play here.</p><p class="dialog-copy">Favorites and game progress are saved in this browser. Bijan’s Lair uses no ad or analytics scripts.</p><p class="dialog-copy"><a href="games/credits.html">Game credits and licenses</a></p>';
  dialog.showModal();
});
function isGameFullscreen() {
  return document.fullscreenElement === gameWindow || dialog.classList.contains("expanded-game");
}

function updateFullscreenButton() {
  fullscreenButton.textContent = isGameFullscreen() ? "Exit fullscreen" : "Fullscreen";
}

function exitGameFullscreen() {
  if (document.fullscreenElement === gameWindow) {
    document.exitFullscreen().catch(() => {});
  }
  dialog.classList.remove("expanded-game");
  updateFullscreenButton();
}

fullscreenButton.addEventListener("click", async () => {
  if (isGameFullscreen()) {
    exitGameFullscreen();
    return;
  }
  try {
    await gameWindow.requestFullscreen();
    if (!dialog.open) exitGameFullscreen();
  } catch {
    if (dialog.open) dialog.classList.add("expanded-game");
  }
  updateFullscreenButton();
});
document.addEventListener("fullscreenchange", updateFullscreenButton);
dialog.addEventListener("cancel", event => {
  if (isGameFullscreen()) {
    event.preventDefault();
    exitGameFullscreen();
  }
});
dialog.addEventListener("close", () => {
  exitGameFullscreen();
  fullscreenButton.hidden = true;
  detailBody.replaceChildren();
  dialog.classList.remove("hosted-game", "wide-game");
});

function showGame(game) {
  fullscreenButton.hidden = false;
  detailTitle.textContent = game.name;
  detailBody.replaceChildren();
  const description = document.createElement("p");
  description.className = "dialog-copy";
  description.textContent = game.description;
  detailBody.append(description);
  dialog.classList.add("hosted-game");
  dialog.classList.toggle("wide-game", Boolean(game.wide));
  const credit = document.createElement("p");
  credit.className = "game-credit";
  credit.textContent = game.creator + " · ";
  const license = document.createElement("a");
  license.href = "games/credits.html#" + (game.creditId || game.id);
  license.textContent = game.license;
  credit.append(license);
  const frame = document.createElement("iframe");
  frame.title = "Play " + game.name;
  frame.src = game.page;
  frame.addEventListener("load", () => {
    frame.contentDocument?.addEventListener("keydown", event => {
      if (event.key !== "Escape" || event.defaultPrevented) return;
      if (isGameFullscreen()) exitGameFullscreen();
      else dialog.close();
    });
  });
  detailBody.append(frame, credit);
  dialog.showModal();
}

render();
