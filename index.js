const celciusInput = document.querySelector('#celcius>input');
const fahrenheitInput = document.querySelector('#fahrenheit>input');
const kelvinInput = document.querySelector('#kelvin>input');


let button = document.querySelector('.button  button');

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}


/*celcius to fahrenheit and kelvin*/

celciusInput.addEventListener('input', function() {
    let celTemperature = parseFloat(celciusInput.value)
    let fahTemperature = (celTemperature * (9 / 5)) + 32
    let KelTemperature = celTemperature + 273.15

    fahrenheitInput.value = roundNumber(fahTemperature);
    kelvinInput.value = roundNumber(KelTemperature);
})


/*fahrenheit to celcius and kelvin*/

fahrenheitInput.addEventListener('input', function() {
    let fahTemperature = parseFloat(fahrenheitInput.value)
    let celTemperature = (fahTemperature - 32) * (5 / 9)
    let KelTemperature = (fahTemperature - 32) * (5 / 9) + 273.15

    celciusInput.value = roundNumber(celTemperature);
    kelvinInput.value = roundNumber(KelTemperature);
})

/*kevin to celcius and fahrenheit*/

kelvinInput.addEventListener('input', function() {
    let KelTemperature = parseFloat(kelvinInput.value)
    let celTemperature = KelTemperature - 273.15
    let fahTemperature = (KelTemperature - 273.15) * (5 / 9) + 32

    celciusInput.value = roundNumber(celTemperature);
    fahrenheitInput.value = roundNumber(fahTemperature);
});

//Empty all value 
button.addEventListener('click', () => {
    celciusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
});