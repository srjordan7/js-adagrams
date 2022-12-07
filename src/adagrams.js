export const drawLetters = () => {
  const letterPool = {
    A: 9,
    B: 2,
    C: 2,
    D: 4,
    E: 12,
    F: 2,
    G: 3,
    H: 2,
    I: 9,
    J: 1,
    K: 1,
    L: 4,
    M: 2,
    N: 6,
    O: 8,
    P: 2,
    Q: 1,
    R: 6,
    S: 4,
    T: 6,
    U: 4,
    V: 2,
    W: 2,
    X: 1,
    Y: 2,
    Z: 1,
  };

  let letters = new Array();

  for (const letter in letterPool) {
    for (let i = 0; i < letterPool[letter]; i++) {
      letters.push(letter);
    }
  }

  const hand = [...letters].sort(() => 0.5 - Math.random());

  return hand.slice(0, 10);
};

export const usesAvailableLetters = (input, lettersInHand) => {};

export const scoreWord = (word) => {};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
