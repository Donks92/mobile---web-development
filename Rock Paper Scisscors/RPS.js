// this allows you to merge the RPSView JS code into the functionality code here
import RPSView from "./Rock, Paper, Scissors/RPSView.js";

let PlayerScore = 0;
let ComputerScore = 0;
// reference to HTML document
const root = document.querySelector("#app");
const view = new RPSView(root, "Player", "Computer", (player, direction) => {
    //update the scores
   const difference = direction === "minus" ? -1 : 1;

   if (player === "player") {
    PlayerScore = Math.max(PlayerScore + difference, 0);
   } else {
    ComputerScore = Math.max(ComputerScore + difference, 0);
   }

   view.update(PlayerScore, ComputerScore);
});
