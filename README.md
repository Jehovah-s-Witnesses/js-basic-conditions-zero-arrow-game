# JS basic conditions/Zero arrow game

## I need to create an arrow-based game. Imagine a labyrinth with only two correct directions that lead to the target. The player will input commands like `UP`, `DOWN`, `LEFT`, or `RIGHT`. After each command, the game will check if the direction is correct. If the direction is incorrect, the game ends. If the direction is correct, the player moves to the next step, repeating the process until reaching the final destination.

```
S - start
# - wall
arrows - correct ways(2)
F - final destination
```

```
← ← ← S → → # #
↓ # ← ← ← ↓ # #
↓ # ↓ F # # # #
↓ # # ↑ # # # #
→ → → ↑ # # # #
# # # # # # # #
```

Way 1 will be: LEFT, LEFT, LEFT, DOWN, DOWN, DOWN, RIGHT, RIGHT, RIGHT, UP, UP, UP

Way 2 will be: RIGHT, RIGHT, DOWN, LEFT, LEFT, LEFT, DOWN, RIGHT

Use only conditional statements and prompts. Currently, the code has deeply nested conditions that should be reduced.

## Criteria:

- Fix all errors in file
- All code should be formatted by eslint (we have pipeline check for this)
- All code should be completed by [guidelines](https://github.com/rammfall-code/guidelines/blob/main/JS.md)
- All code should not have errors in [validator](https://validator.w3.org/nu/)
- All code should not have errors by [git guidelines](https://github.com/rammfall-code/guidelines/blob/main/GIT.md)
