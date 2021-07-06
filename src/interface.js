document.addEventListener("DOMContentLoaded", () => {
  const thermostat = new Thermostat();
  document.querySelector('#temp').innerText = thermostat.tempDisplay();
})
