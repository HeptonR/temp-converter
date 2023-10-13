function updateVariable(event) {
    // Get the value from the Kelvin input
    const kelvin = document.getElementById('kelvinInput');
    const kelvinInput = parseFloat(kelvin.value);

    // Calculate Kelvin from Celsius and then to Fahrenheit and round off
    const celsius = kelvinInput - 273;
    const fahrenheit = celsius * (9/5) + 32;
    const roundedFahrenheit = Math.round(fahrenheit);
    
    // Display the result in the front end
    document.getElementById("result").innerHTML = roundedFahrenheit + '°F';

    // Check and alert if the field is empty
    if (isNaN(kelvinInput)) {
        numericValue = kelvinInput;
        alert("Please enter a temperature in °K.");
      } 
}