/* Link the elements in the 
   HTML to the JS!
   Hint: Look at the demos or at the Rebar workshop
*/
const timerelement = document.getElementById("timer");
const mole = document.getElementById("mole");
const scoreelement = document.getElementById("score");
const resetbtn = document.getElementById("timer-button");
/* Initialize your variables.
   Hint: Keep track of a few different numbers
*/


let time = 2000;  // Line 6
let score = 0;   // Line 7
/* This function runs every 100th of a second.
   Use it to update the timer and run the game.
*/
function reset(){
   time = 2000;
   score = -1;
   relocate();
}
function timer() {
   if (time > 0){
      time--;
      timerelement.innerText = time;
   }
   console.log(time);
}

/* This will repeatedly run the timer function every 100th of a second. */
setInterval(timer, 1)


/* This will run every time the mole is clicked.
   You decide what this function should do!
*/
function relocate() {
   if (time > 0){
       score++;
       scoreelement.innerText = "Score: " +score;

       let x = 5 + Math.random() * 90;
       let y = 15 + Math.random() * 45;
       mole.style.left = x+"%";
       mole.style.top = y+"%";
   }
}

/* Add a listener to the mole to run the relocate function */
mole.addEventListener("click", relocate);
resetbtn.addEventListener("click", reset);