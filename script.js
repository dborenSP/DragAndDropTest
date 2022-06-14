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

document.addEventListener("dragover", event => {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", event => {
  // highlight potential drop target when the draggable element enters it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

document.addEventListener("dragleave", event => {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});

document.addEventListener("drop", event => {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
});