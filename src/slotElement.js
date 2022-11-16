export function createSlotElement(){   
   const slot = document.createElement("div");
   slot.className = "slot";
   slot.addEventListener("click", slotCliked);
   return slot;
}
export function getSlots(wordElement = null){
   if(!wordElement){
      wordElement = document;
   }
   return Array.from(wordElement.querySelectorAll('.slot'));
}
function slotCliked(event) {
   unselectAllSlots();
   selectSlot(event.target);
 }

function unselectAllSlots(){
   document.querySelectorAll(".selected").forEach(unselectSlot);
}

export function getSelectedSlot(){
   return document.querySelector(".selected");
}

export function selectSlot(slot){
   unselectAllSlots();
   slot.classList.add("selected");
}
function unselectSlot(slot){
   slot.classList.remove("selected")
}

export function slotIsEmpty(slot){
return slot.innerHTML === '';
}
export function firstSlotEmpty(){
 return getSlots().find(slotIsEmpty);
}
export function writeInSlot(slot, text){
   slot.innerHTML = text;
}
export function getPreviusSlotSelected(){
return getSelectedSlot().previousElementSibling;
}
export function getLastSlot(){
   return getSlots().pop();
}
export function getLetter(slot){
return slot.textContent;
}
 
export function toColor(slot,color){
   slot.classList.add(color);
}