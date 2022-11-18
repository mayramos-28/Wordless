import { createSlotElement, slotIsEmpty } from "./slotElement";

export function createWordElement(arrWord) {
  const word = document.createElement("div");
  word.className = "word";
  arrWord.forEach(() => {
    word.appendChild(createSlotElement());
  });
  return word;
}
export function apeendNewWordElement(wordElement) {
  const words = document.getElementById("words");
  words.appendChild(wordElement);
}
export function getCurrentWordElement() {
  return document.getElementById("words").lastChild;
}
export function isCompletedWord() {
  return Array.from(getCurrentWordElement().childNodes).every(
    (slot) => !slotIsEmpty(slot)
  );
}
export function getCurrentwrittenword() {
  return getCurrentWordElement().textContent.toLowerCase();
}
