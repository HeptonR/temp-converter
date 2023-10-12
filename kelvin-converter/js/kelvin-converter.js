function updateVariable() {
    const kelvin = document.getElementById('kelvinInput');
    const newValue = parseFloat(kelvin.value);

    const celsius = newValue - 273;
    const fahrenheit = celsius * (9/5) + 32;
    const roundedFahrenheit = Math.round(fahrenheit);
    
    document.getElementById("result").innerHTML = roundedFahrenheit + '°F';
}