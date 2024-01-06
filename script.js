let calculation = localStorage.getItem('calculation') || '';

if(!calculation){
    document.querySelector('.display').innerHTML = '0';
}
else{
    document.querySelector('.display').innerHTML = calculation;
}

function updateCalculation(value){
    if(!value){
        calculation='';
        document.querySelector('.display').innerHTML = '0';
    }
    else if(value === '='){
        calculation=`${eval(calculation)}`;
        document.querySelector('.display').innerHTML = calculation;
    }
    else if(value === '--'){
        if(calculation.length < 2){
            calculation = '';
            document.querySelector('.display').innerHTML = '0';
        }
        else{
            calculation = calculation.slice(0,-1);
            document.querySelector('.display').innerHTML = calculation;
        }
    }
    else{
        calculation += value;
        document.querySelector('.display').innerHTML = calculation;
    }
    localStorage.setItem('calulation',calculation);
}

document.body.addEventListener('keydown', (event) => {
    if(
        event.key === '0'||
        event.key === '1'||
        event.key === '2'||
        event.key === '3'||
        event.key === '4'||
        event.key === '5'||
        event.key === '6'||
        event.key === '7'||
        event.key === '8'||
        event.key === '9'||
        event.key === '.'||
        event.key === '='||
        event.key === '+'||
        event.key === '-'||
        event.key === '*'||
        event.key === '/'
        )
        updateCalculation(event.key);
    else if(
        event.key === 'Backspace'
    )
        updateCalculation('--');
    else if(
        event.key === 'Enter'
    )
        updateCalculation('=');
    else if(
        event.key === 'c'
    )
        updateCalculation('');
});