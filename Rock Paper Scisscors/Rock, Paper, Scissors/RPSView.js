//give permission to export this into the import function in RPS.js
export default class RPSView {
    constructor(root, player, computer, onControlButtonClick) {
        this.root = root;
        this.root.innerHTML = `
            <div class="score-board">
                <div class="user-label">${player}</div>
                <div class="computer-label">${computer}</div>
                <div class="user-score" data-for-player="player">0</div>
                <div class="computer-score" data-for-computer="computer">0</div>
                <div class="controls" data-for-player="player">
                    <button class ="control-button">-</button>
                    <button class ="control-button">+</button>
                </div>
                <div class="controls" data-for-computer="computer">
                    <button class ="control-button">-</button>
                    <button class ="control-button">+</button>
        </div>
     </div>
    `;

    this.root.querySelectorAll(".control-button").forEach(controlButton => {
        controlButton.addEventListener("click", () => {
            const direction = controlButton.textContent === "-" ? "minus" : "plus";
            const player = controlButton.closest(".control-button").dataset.forPlayer;

            onControlButtonClick(player, direction);
        });
      });
     }

     update(PlayerScore, ComputerScore) {
        this.root.querySelector(".user-score[data-for-player=`player`]").textContent = PlayerScore;
        this.root.querySelector(".user-score[data-for-comupter=`computer`]").textContent = ComputerScore;
     }
}