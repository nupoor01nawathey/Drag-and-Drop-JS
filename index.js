const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault(); // default action is not to move the img in that div
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered'; // empty + hovered both classes
}

function dragLeave() {
  this.className = 'empty'; // only empty hovered is removed
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
