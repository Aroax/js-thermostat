'use strict';

class Thermostat {
  constructor(defaultTemp = 20) {
    this._temp = defaultTemp;
  }

  tempDisplay() {
    return this._temp;
  };
};
