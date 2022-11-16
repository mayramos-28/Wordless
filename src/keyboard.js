import {
  firstSlotEmpty,
  getLastSlot,
  getLetter,
  getPreviusSlotSelected,
  getSelectedSlot,
  getSlots,
  selectSlot,
  slotIsEmpty,
  toColor,
  writeInSlot,
} from "./slotElement";
import { existsWord, letterInWord, letterIsEqual } from "./word";
import {
  apeendNewWordElement,
  createWordElement,
  getCurrentWordElement,
  getCurrentwrittenword,
  isCompletedWord,
} from "./wordElement";
import { playWord } from ".";

function isDeleteKey(key) {
  return key.id === "backspace";
}
function isEnterKey(key) {
  return key.id === "enter";
}
function onDeleteKey() {
  const slot = getSlotToDelete();
  writeInSlot(slot, "");
  selectSlot(slot);
}
function onEnterKey() {
  if (!isCompletedWord()) {
    alert("No hay suficientes letras");
    return;
  }
  const wordWritte = getCurrentwrittenword();
  if (!existsWord(wordWritte)) {
    alert("La palabra no está en la lista");
    return;
  }
  const wordElement = getCurrentWordElement();
  getSlots(wordElement).forEach((slot, i) => {
    const letter = getLetter(slot);
    if (letterIsEqual(playWord, letter, i)) {
      toColor(slot, "green");
      return;
    }
    if (letterInWord(playWord, letter)) {
      toColor(slot, "yellow");
      return;
    }
    toColor(slot, "grey");
  });

  if (playWord.join("") !== wordWritte) {
    apeendNewWordElement(createWordElement(playWord));
    return;
  }
}

function getSlotToDelete() {
  const slot = getSelectedSlot();
  if (!slot) {
    return getLastSlot();
  }
  if (!slotIsEmpty(slot)) {
    return slot;
  }
  const previousSlot = getPreviusSlotSelected();
  if (previousSlot) {
    return previousSlot;
  }
  return slot;
}

export function insertKey(event) {
  if (isDeleteKey(event.target)) {
    onDeleteKey();
    return;
  }
  if (isEnterKey(event.target)) {
    onEnterKey();
    return;
  }
  let slot = getSelectedSlot();
  if (!slot) {
    return;
  }
  writeInSlot(slot, event.target.getAttribute("data-key"));
  if (firstSlotEmpty()) {
    selectSlot(firstSlotEmpty());
    return;
  }
}
