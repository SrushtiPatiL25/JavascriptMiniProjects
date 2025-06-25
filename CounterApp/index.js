// Select elements
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Initialize count from localStorage or zero
let count = 0;
const savedCount = localStorage.getItem('counterValue');

if (savedCount !== null) {
  count = parseInt(savedCount, 10);
}

// Update counter display and color, save to localStorage
function updateDisplay() {
  counterDisplay.textContent = count;

  if (count > 0) {
    counterDisplay.style.color = 'green';
  } else if (count < 0) {
    counterDisplay.style.color = 'red';
  } else {
    counterDisplay.style.color = 'black';
  }

  // Save count to localStorage
  localStorage.setItem('counterValue', count);
}

// Increment, decrement, reset functions
function increment() {
  count++;
  updateDisplay();
}

function decrement() {
  count--;
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}

// Event listeners
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      increment();
      break;
    case 'ArrowDown':
      decrement();
      break;
    case 'r':
    case 'R':
      reset();
      break;
  }
});

// Initial display update on page load
updateDisplay();
