'use strict';

class Thermostat {
  constructor(defaultTemp = 20) {
    this._temp = defaultTemp;
  }

  tempDisplay() {
    return this._temp;
  };

  increaseTemp(increment = 1) {
    this._temp += increment;
  }
};
