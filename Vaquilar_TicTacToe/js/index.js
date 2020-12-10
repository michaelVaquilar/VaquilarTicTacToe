
import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView(document.getElementById("app"));


gameView.onTileClick = function(){
game.makeMove(i);
gameView.update(game);
};


