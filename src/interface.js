document.addEventListener("DOMContentLoaded", () => {

   let updateTemp = () => {
    document.querySelector('#temp').innerText = thermostat.tempDisplay();
    document.querySelector('#temp').className = thermostat.energyUsage();
  };

  var city = 'London';

  const thermostat = new Thermostat();

  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=0782e7ae39962cba960b3765a6fa5a6f&units=metric`)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature').innerText = data.main.temp;
    document.querySelector('#current-city').innerText = city;
  });



  let getCity = () => {
  fetch('http://ip-api.com/json/?fields=city')
  .then(res => res.json())
  .then((out) => {
      console.log(` ${out.city}; `);
      document.querySelector('#current-city').innerText = out.city;
    }).catch(err => console.error(err));
  };
  // document.querySelector('#temp').innerText = thermostat.tempDisplay();
  updateTemp();

  document.querySelector('#temp-up').addEventListener('click', () => {
    thermostat.tempUp();
    updateTemp();
  });

  document.querySelector('#temp-down').addEventListener('click', () => {
    thermostat.tempDown();
    updateTemp();
  });

  document.querySelector('#temp-reset').addEventListener('click', () => {
    thermostat.resetTemp();
    updateTemp();
  });

  document.querySelector('#powersaving-on').addEventListener('click', () => {
    thermostat.powerSavingOn();
    document.querySelector('#power-saving-status').innerText = 'on';
    updateTemp();
  });

  document.querySelector('#powersaving-off').addEventListener('click', () => {
    thermostat.powerSavingOff();
    document.querySelector('#power-saving-status').innerText = 'off';
    updateTemp();
  });


})
