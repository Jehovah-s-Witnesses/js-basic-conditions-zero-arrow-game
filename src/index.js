let movementPosition = prompt('Enter direction (UP, DOWN, LEFT, RIGHT)');
const warningMessage = 'Wrong move, game over.';
const directionMoveToLeft = 'LEFT';
const directionMoveToRight = 'RIGHT';
const directionMoveToDown = 'Down';
const directionMoveToUp = 'Up';
const selectDirection = 'Enter direction (UP, DOWN, LEFT, RIGHT)';
if (movementPosition.toUpperCase() === directionMoveToLeft) {
  alert(movementPosition);
  movementPosition = prompt(selectDirection);
  if (movementPosition.toUpperCase() === directionMoveToLeft) {
    alert(movementPosition);
    movementPosition = prompt(selectDirection);
    if (movementPosition.toUpperCase() === directionMoveToLeft) {
      alert(movementPosition);
      movementPosition = prompt(selectDirection);
      if (movementPosition.toUpperCase() === directionMoveToDown) {
        alert(movementPosition);
        movementPosition = prompt(selectDirection);
        if (movementPosition.toUpperCase() === directionMoveToDown) {
          alert(movementPosition);
          movementPosition = prompt(selectDirection);
          if (movementPosition.toUpperCase() === directionMoveToDown) {
            alert(movementPosition);
            movementPosition = prompt(
              selectDirection,
            );
            if (movementPosition.toUpperCase() === directionMoveToRight) {
              alert(movementPosition);
              movementPosition = prompt(
                selectDirection,
              );
              if (movementPosition.toUpperCase() === directionMoveToRight) {
                alert(movementPosition);
                movementPosition = prompt(selectDirection);
                if (movementPosition.toUpperCase() === directionMoveToRight) {
                  alert(movementPosition);
                  movementPosition = prompt(selectDirection);
                  if (movementPosition.toUpperCase() === directionMoveToUp) {
                    alert(movementPosition);
                    movementPosition = prompt(selectDirection);
                    if (movementPosition.toUpperCase() === directionMoveToUp) {
                      alert(movementPosition);
                      movementPosition = prompt(selectDirection);
                      if (
                        movementPosition.toUpperCase() === directionMoveToUp
                      ) {
                        alert(`Congratulations! You've reached the final destination.`);
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
} else if (movementPosition.toUpperCase() === directionMoveToRight){
  alert(movementPosition);
  movementPosition = prompt(selectDirection);
  if (movementPosition.toUpperCase() === directionMoveToRight) {
    alert(movementPosition);
    movementPosition = prompt(selectDirection);
    if (movementPosition.toUpperCase() === directionMoveToUp) {
      alert(movementPosition);
      movementPosition = prompt(selectDirection);
      if (movementPosition.toUpperCase() === directionMoveToLeft) {
        alert(movementPosition);
        movementPosition= prompt(selectDirection);
        if (movementPosition.toUpperCase() === directionMoveToLeft) {
          alert(movementPosition);
          movementPosition = prompt(selectDirection);
          if (movementPosition.toUpperCase() === directionMoveToLeft) {
            alert(movementPosition);
            movementPosition = prompt(
              selectDirection,
            );
            if (movementPosition.toUpperCase() === directionMoveToDown) {
              alert(movementPosition);
              movementPosition = prompt(
                selectDirection,
              );
              if (movementPosition.toUpperCase() === directionMoveToDown) {
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
