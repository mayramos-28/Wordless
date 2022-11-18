import words from "./dictionary";

export function getRandomWord() {
  let max = words.length;
  let word = words[Math.floor(Math.random() * max)];
  return word.split("");
}

export function existsWord(word) {
  return words.includes(word);
}
export function letterIsEqual(playWord, letter, index) {
  return playWord[index].toLowerCase() === letter.toLowerCase();
}
export function letterInWord(playWord, letter) {
  return playWord.includes(letter.toLowerCase());
}
