document.addEventListener("DOMContentLoaded", () => {

   let updateTemp = () => {
    document.querySelector('#temp').innerText = thermostat.tempDisplay();
    document.querySelector('#temp').className = thermostat.energyUsage();
  };

  const thermostat = new Thermostat();

  // document.querySelector('#temp').innerText = thermostat.tempDisplay();
  updateTemp();


  document.querySelector('#temp-up').addEventListener('click', () => {
    thermostat.tempUp();
    // document.querySelector('#temp').innerText = thermostat.tempDisplay();
    updateTemp();
  });

  document.querySelector('#temp-down').addEventListener('click', () => {
    thermostat.tempDown();
    // document.querySelector('#temp').innerText = thermostat.tempDisplay();
    updateTemp();
  });

  document.querySelector('#temp-reset').addEventListener('click', () => {
    thermostat.resetTemp();
    // document.querySelector('#temp').innerText = thermostat.tempDisplay();
    updateTemp();
  });

  document.querySelector('#powersaving-on').addEventListener('click', () => {
    thermostat.powerSavingOn();
    document.querySelector('#power-saving-status').innerText = 'on';
    // document.querySelector('#temp').innerText = thermostat.tempDisplay();
    updateTemp();
  });

  document.querySelector('#powersaving-off').addEventListener('click', () => {
    thermostat.powerSavingOff();
    document.querySelector('#power-saving-status').innerText = 'off';
    // document.querySelector('#temp').innerText = thermostat.tempDisplay();
    updateTemp();
  });


})
