

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearBtn = document.getElementById('clear');
const textDisplay_current = document.getElementById('textDisplay_current');
const textDisplay_prev = document.getElementById('textDisplay_prev');
const operation_btn = document.getElementById('operation_btn');
const equalButton = document.querySelector('[data-equal]');


numberButtons.forEach(number => {
    number.addEventListener('click', () => {
       appendNumber(number)
})
})

operationButtons.forEach(operation => {
    operation.addEventListener('click', () => {
        chooseOperand(operation)
    })
} )


function chooseOperand(operation) {
    textDisplay_prev.innerText = textDisplay_current.innerText;
    textDisplay_current.innerText = '';
    operation_btn.innerText = operation.innerText;
}




allClearBtn.addEventListener('click', () => {
    clear()
})

equalButton.addEventListener('click', () => {
    compute()
    
})


function compute(){
 
   let computation 

   let operation = operation_btn.innerText;


    const prev = parseFloat(textDisplay_prev.innerText);
    console.log(prev)
    const current = parseFloat(textDisplay_current.innerText);



    switch(operation) {
        case "+":
            computation = prev + current
            break
        case '-':
            computation = prev - current
            break
        case '*':
            computation = prev * current
            break
        case '÷':
            computation = prev / current
            break
        default: return
       
    }

   textDisplay_current.innerText = computation
   textDisplay_prev.innerText = ''
   operation_btn.innerText = ''

     
}



function appendNumber(number){
   
    textDisplay_current.innerText = textDisplay_current.innerText + number.innerText
}

function clear(){
   
    textDisplay_current.innerText = '';
    textDisplay_prev.innerText = '';
    operation_btn.innerText = '';

}

