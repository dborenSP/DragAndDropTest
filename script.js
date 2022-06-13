let dragged;

document.addEventListener("drag", event => {
  console.log("dragging");
});

document.addEventListener("dragstart", event => {
  dragged = event.target;
  event.target.classList.add("dragging");
});

document.addEventListener("dragend", event => {
  event.target.classList.remove("dragging");
});