function convertToCelsius() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    if (isNaN(temperature)) {
        alert('Por favor, ingrese una temperatura válida.');
        return;
    }
    const celsius = (temperature - 32) * 5 / 9;
    document.getElementById('result').textContent = `${temperature}°F son ${celsius.toFixed(2)}°C`;
    console.log(`${temperature}°F son ${celsius.toFixed(2)}°C`);
}

function convertToFahrenheit() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    if (isNaN(temperature)) {
        alert('Por favor, ingrese una temperatura válida.');
        return;
    }
    const fahrenheit = (temperature * 9 / 5) + 32;
    document.getElementById('result').textContent = `${temperature}°C son ${fahrenheit.toFixed(2)}°F`;
    console.log(`${temperature}°C son ${fahrenheit.toFixed(2)}°F`);
}
