let TempInCelsius=39;

function temperature(TempInCelsius) {
    let TempInFahrenheit=(TempInCelsius * 9/5) + 32;
    return(TempInFahrenheit);
}

console.log("temperature "+TempInCelsius+"℃ "+ " is converted in fahrenheit as "+temperature(TempInCelsius)+"℉ ");
