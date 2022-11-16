import "./styles.css";
import { insertKey } from "./keyboard";
import { apeendNewWordElement, createWordElement } from "./wordElement";
import { getRandomWord } from "./word";

export const playWord = getRandomWord();
console.log(playWord);
window.addEventListener("load", () => {
  apeendNewWordElement(createWordElement(playWord));
  document.querySelectorAll('.key,.command').forEach(key => key.addEventListener('click', insertKey));
});


