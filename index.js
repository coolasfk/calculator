

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearBtn = document.getElementById('clear');
const textDisplay_current = document.getElementById('textDisplay_current');
const textDisplay_prev = document.getElementById('textDisplay_prev');
const operation_btn = document.getElementById('operation_btn');
const equalButton = document.querySelector('[data-equal]');
const deleteBtn = document.querySelector('[data-delete]')


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

deleteBtn.addEventListener('click', () => {
    delete_func()
})

function delete_func() {
    textDisplay_current.innerText = textDisplay_current.innerText.slice(0, -1)

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

    const current = parseFloat(textDisplay_current.innerText);

    if(isNaN(prev) || isNaN(current)) return


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

    operation = undefined

   textDisplay_current.innerText = computation
   textDisplay_prev.innerText = ''
   operation_btn.innerText = ''

     
}



function appendNumber(number){

   if(number.innerText === "." && textDisplay_current.innerText.includes('.')) return
    textDisplay_current.innerText = textDisplay_current.innerText + number.innerText 
   
}

function clear(){
   
    textDisplay_current.innerText = '';
    textDisplay_prev.innerText = '';
    operation_btn.innerText = '';

}

