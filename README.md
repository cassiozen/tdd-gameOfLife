# Test-Driven Game of Life

## GOL Rules

- Currently alive cell
  - “Underpopulation”: dies given fewer than 2 live neighbors
  - “Overcrowding”: dies given greater than 3 live neighbors
  - Otherwise, lives on
- Currently dead cell
  - “Birth”: comes to life given exactly 3 live neighbors
  - Otherwise, remains dead
