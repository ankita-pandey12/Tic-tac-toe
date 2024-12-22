let curr = "cross";
const buttons = document.querySelectorAll(".btn");

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let count = 0;
const func = (event) => {
  const button = event.target; // Get the specific button that was clicked
  if (curr === "cross") {
    button.innerText = "X";
    curr = "circle";
  } else {
    button.innerText = "O";
    curr = "cross";
  }
  count++;
  button.disabled = true; //to disable a button.
  checkwinner();
};
let winnerfound=false;
const checkwinner = () => {
  for (let pattern of winPatterns) {
    let val1 = buttons[pattern[0]].innerText;
    let val2 = buttons[pattern[1]].innerText;
    let val3 = buttons[pattern[2]].innerText;

      if (val1 != "" && val2 != "" && val3 != "") {
        if (val1 === val2 && val2 === val3) {
          buttons.forEach((button) => {
            button.disabled = true;
          });
          alert(`Winner is ${val1}`);
          winnerfound=true;
          break;
        }
      }

    if (!winnerfound && count === 9) {
    alert("Draw");
    break;
  }
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", func);
});

const rest = document.querySelectorAll(".reset");
rest.forEach((button) => {
  button.addEventListener("click", () => {
    // Reload the page
    location.reload();
  });
});
