
let move = prompt("Enter direction (UP, DOWN, LEFT, RIGHT) ");
const warningMessage = 'Wrong move, game over.';

if (move.toUpperCase() === "LEFT") {
  alert(move);
  move = prompt(c);
  if (move.toUpperCase() === 'LEFT'){
    alert(move);
    move = prompt("Enter direction (UP, DOWN, LEFT, RIGHT)");
    if (move.toUpperCase() === 'LEFT'){
      alert(move);
      move = prompt("Enter direction (UP, DOWN, LEFT, RIGHT) ");
      if (move.toUpperCase() === 'DOWN') {
        alert(move);
        move = prompt("Enter direction (UP, DOWN, LEFT, RIGHT) ");
        if (move.toUpperCase() === 'DOWN') {
          alert(move);
          move = prompt("Enter direction (UP, DOWN, LEFT, RIGHT) ");
          if (move.toUpperCase() === 'DOWN') {
            alert(move);
            move = prompt("Enter direction (UP, DOWN, LEFT, RIGHT) ");
            if (move.toUpperCase() === 'RIGHT') {
              alert(move);
              move = prompt("Enter direction (UP, DOWN, LEFT, RIGHT) ");
              if (move.toUpperCase() === 'RIGHT') {
                alert(move);
                move = prompt("Enter direction (UP, DOWN, LEFT, RIGHT) ");
                if (move.toUpperCase() === 'RIGHT') {
                  alert(move);
                  move = prompt("Enter direction (UP, DOWN, LEFT, RIGHT) ");
                  if (move.toUpperCase() === 'UP') {
                    alert(move);
                    move = prompt("Enter direction (UP, DOWN, LEFT, RIGHT) ");
                    if (move.toUpperCase() === 'UP') {
                      alert(move);
                      move = prompt("Enter direction (UP, DOWN, LEFT, RIGHT) ");
                      if (move.toUpperCase() === 'UP') {
                        alert("Congratulations! You've reached the final destination.");
                      } else {
                        alert(warningMessage);
                      }
                    } else {
                      alert(warningMessage);
                    }
                  } else {
                    alert(warningMessage);
                  }
                } else {
                  alert(warningMessage);
                }
              } else {
                alert(warningMessage);
              }
            } else {
              alert(warningMessage);
            }
          } else {
            alert(warningMessage);
          }
        } else {
          alert(warningMessage);
        }
      } else {
        alert(warningMessage);
      }
    } else {
      alert(warningMessage);
    }
  } else {
    alert(warningMessage);
  }
} else if (move.toUpperCase() === 'RIGHT'){
  alert(move);
  move = prompt("Enter direction (UP, DOWN, LEFT, RIGHT) ");
  if (move.toUpperCase() === 'RIGHT') {
    alert(move);
    move = prompt("Enter direction (UP, DOWN, LEFT, RIGHT) ");
    if (move.toUpperCase() === 'DOWN') {
      alert(move);
      move = prompt("Enter direction (UP, DOWN, LEFT, RIGHT) ");
      if (move.toUpperCase() === 'LEFT') {
        alert(move);
        move = prompt("Enter direction (UP, DOWN, LEFT, RIGHT) ");
        if (move.toUpperCase() === 'LEFT') {
          alert(move);
          move = prompt("Enter direction (UP, DOWN, LEFT, RIGHT) ");
          if (move.toUpperCase() === 'LEFT') {
            alert(move);
            move = prompt("Enter direction (UP, DOWN, LEFT, RIGHT) ");
            if (move.toUpperCase() === 'DOWN') {
              alert(move);
              move = prompt("Enter direction (UP, DOWN, LEFT, RIGHT) ");
              if (move.toUpperCase() === 'RIGHT') {
                alert("Congratulations! You've reached the final destination.")
              } else {
                alert(warningMessage);
              }
            } else {
              alert(warningMessage);
            }
          } else {
            alert(warningMessage);
          }
        } else {
          alert(warningMessage);
        }
      } else {
        alert(warningMessage);
      }
    } else {
      alert(warningMessage);
    }
  } else {
    alert(warningMessage);
  }
} else {
  alert("You're wrong");
}
