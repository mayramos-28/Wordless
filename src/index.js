import "./styles.css";
import { insertKey, onDeleteKey, onEnterKey } from "./keyboard";
import { apeendNewWordElement, createWordElement } from "./wordElement";
import { getRandomWord } from "./word";

export const playWord = getRandomWord();
window.addEventListener("load", () => {
  apeendNewWordElement(createWordElement(playWord));
  document.querySelectorAll('.key').forEach(key => key.addEventListener('click', insertKey));
  document.querySelector('#backspace').addEventListener('click', onDeleteKey);
  document.querySelector('#enter').addEventListener('click', onEnterKey);
});


