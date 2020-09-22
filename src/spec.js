import GameOfLife from "./index";

describe("Game of life TDD", () => {
  describe("Board Creation", () => {
    it("should create a board of given dimensions", () => {
      const gol = new GameOfLife({ rows: 3, cols: 5 });
      expect(gol.board).toEqual([
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ]);

      const gol2 = new GameOfLife({ rows: 4, cols: 4 });
      expect(gol2.board).toEqual([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ]);
    });
  });
  describe("Helper Functions", () => {
    // functions like getCell and getLivingNeighbors
  });

  describe("Board Iterations", () => {
    // Are new game steps being correctly produced?
    // Hint: Maybe check for a couple of well-know patterns?
    // https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns
  });

  /* Next steps:
   *  - Add an option on GameOfLife's constructor to create new boards with
   *    either all cells "off" (or zeros) or with a random pattern of zeros and ones.
   *  - Create a "play" method, that continoulsy generates new iterations
   *    (maybe using setInterval or requestAnimationFrame)
   *  - Create a "stop" method
   *  - Create an UI, with the board (could be a simple <table> or a <canvas>) and Play/Stop buttons
   */
});
