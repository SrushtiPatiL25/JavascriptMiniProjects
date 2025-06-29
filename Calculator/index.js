const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach( btn => {
    btn.addEventListener( "click", (e) => {
        const value = btn.textContent;

        if (value === "="){
            calculateExpression();
        }
        else if(value === "C"){
            display.value =" ";
        }
        else if (value === '←') {
            display.value = display.value.slice(0, -1);
          }
        else{
            display.value +=value
        }
    })
})

function calculateExpression() {
    try {
    const result = eval(display.value);
      if (result === Infinity || result === -Infinity || Number.isNaN(result)) {
        display.value = "Error: Invalid calculation";
        return;
      }
      display.value =result;
    } catch {
      display.value = 'Error';
    }
  }


  
// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
  
    // Allowed keys: digits, operators, decimal point, Enter, Backspace, Delete
    if (
      (key >= '0' && key <= '9') ||
      key === '+' || key === '-' || key === '*' || key === '/' || key === '.' 
    ) {
      display.value += key;
    } else if (key === 'Enter') {
        calculateExpression();
    } else if (key === 'Backspace') {
      display.value = display.value.slice(0, -1);
    } else if (key === 'Delete') {
      display.value = '';
    } else {
      alert("Please press valid keys to view result")
    }
  });