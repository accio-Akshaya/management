let display = document.getElementById('countdisplay');
let incrementBtn = document.getElementById('increment');
let decrementBtn = document.getElementById('decrement');
let clearBtn = document.getElementById('clear');
let error = document.getElementById('error-message');

let count= 0;

function updateDisplay() {
    display.textContent = count;
    
    decrementBtn.disabled = count ===0;
    error.style.display = count > 0? "none":"block";
    clearBtn.style.display = count ===0 ?"none":"inline-block";
}

function incrementCount(){
    count++;
    updateDisplay();
}

function decrementCount(){
    if(count > 0){
      count --;
      updateDisplay();
    }else{
        error.style.display="block";
    }
}

function clearDisplay(){
    count=0;
    updateDisplay();

}

incrementBtn.addEventListener("click",incrementCount);
decrementBtn.addEventListener("click",decrementCount);
clearBtn.addEventListener("click",clearDisplay);

updateDisplay();