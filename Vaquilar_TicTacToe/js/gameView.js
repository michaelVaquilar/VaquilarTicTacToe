  export default class GameView {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
            <div class="header">
                <div class="headerTurn"></div>
                <div class="headerStatus"></div>
                </button>
            </div>
            <div class="board">
                <div class="board__tile" data-index="0"></div>
                <div class="board__tile" data-index="1"></div>
                <div class="board__tile" data-index="2"></div>
                <div class="board__tile" data-index="3"></div>
                <div class="board__tile" data-index="4"></div>
                <div class="board__tile" data-index="5"></div>
                <div class="board__tile" data-index="6"></div>
                <div class="board__tile" data-index="7"></div>
                <div class="board__tile" data-index="8"></div>
            </div>
        `;

        this.onTileClick = undefined;
        this.onRestartClick = undefined;

        this.root.querySelectorAll(".boardTile").forEach(tile => {
            tile.addEventListener("click", () => {
                if (this.onTileClick) {
                    this.onTileClick(tile.dataset.index);
                }
            });
        });

            
        
    }

    update(game) {
        this.updateTurn(game);
        this.updateStatus(game);
        this.updateBoard(game);
    }

    updateTurn(game) {
        this.root.querySelector(".headerTurn").textContent = `${game.turn}'s turn`;
    }

    updateStatus(game) {
        let status = "In Progress";

        if (game.findWinningCombination()) {
            status = `${game.turn} is the Winner!`;
        } else if (!game.isInProgress()) {
            status = "It's a tie!";
        }

        this.root.querySelector(".headerStatus").textContent = status;
    }

    updateBoard(game) {
        const winningCombination = game.findWinningCombination();

        for (let i = 0; i < game.board.length; i++) {
            const tile = this.root.querySelector(`.boardTile[data-index="${i}"]`);


            }
        }
    }
