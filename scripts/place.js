// get the elements at the HTML
const windChill = document.querySelector("#windChill")
const temperature = document.querySelector("#temp")
const windSpeed = document.querySelector("#wind")

// country weather data
const currentTemp = 20
const currentSpeed = 10

// add data to the HTML
temperature.textContent = currentTemp
windSpeed.textContent = currentSpeed

// calculates the wind chill
const calculateWindChill = (temperature, speed) => {
    return (13.12 + (0.6215 * temperature) - (11.37 * speed ** 0.16) + (0.3965 * temperature) * (speed ** 0.16)).toFixed(1)
}

// conditions to check the windChill content
if (currentTemp <= 10 && CurrentSpeed > 4.8) {
    const windChill = document.querySelector("#windChill")
} else {
    windChill.textContent = "N/A"
}


// get the current year and the last modification
const today = new Date()
const Year = document.querySelector("#currentYear")
const lastModifed = document.querySelector("#lastModified")

Year.innerHTML = today.getFullYear()
lastModifed.innerHTML = document.lastModified