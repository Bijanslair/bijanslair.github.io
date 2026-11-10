window.fakeStorage = {
  _data: {},

  setItem: function (id, val) {
    return this._data[id] = String(val);
  },

  getItem: function (id) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  },

  removeItem: function (id) {
    return delete this._data[id];
  },

  clear: function () {
    return this._data = {};
  }
};

function LocalStorageManager() {
  this.bestScoreKey     = "bestScore";
  this.gameStateKey     = "2048.gameState";

  var supported = this.localStorageSupported();
  this.storage = supported ? window.localStorage : window.fakeStorage;
}

LocalStorageManager.prototype.localStorageSupported = function () {
  var testKey = "test";

  try {
    var storage = window.localStorage;
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

// Best score getters/setters
LocalStorageManager.prototype.getBestScore = function () {
  return this.storage.getItem(this.bestScoreKey) || 0;
};

LocalStorageManager.prototype.setBestScore = function (score) {
  this.storage.setItem(this.bestScoreKey, score);
};

// Game state getters/setters and clearing
LocalStorageManager.prototype.getGameState = function () {
  var stateJSON = this.storage.getItem(this.gameStateKey);
  var legacyState = !stateJSON && this.storage.getItem("gameState");
  try {
    var state = JSON.parse(stateJSON || legacyState || "null");
    var grid = state && state.grid;
    if (!grid || grid.size !== 4 || !Array.isArray(grid.cells) ||
        grid.cells.length !== grid.size || !grid.cells.every(function (row) {
          return Array.isArray(row) && row.length === grid.size &&
            row.every(function (tile) {
              return tile === null || (tile && tile.position &&
                Number.isFinite(tile.position.x) && Number.isFinite(tile.position.y) &&
                Number.isFinite(tile.value));
            });
        })) {
      return null;
    }
    if (legacyState) this.storage.setItem(this.gameStateKey, legacyState);
    return state;
  } catch (error) {
    return null;
  }
};

LocalStorageManager.prototype.setGameState = function (gameState) {
  this.storage.setItem(this.gameStateKey, JSON.stringify(gameState));
};

LocalStorageManager.prototype.clearGameState = function () {
  this.storage.setItem(this.gameStateKey, "null");
};
