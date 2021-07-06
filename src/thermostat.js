'use strict';

class Thermostat {
  constructor(defaultTemp = 20) {
    this._temp = defaultTemp;
    this._tempMinimum = 10;
  };

  tempDisplay() {
    return this._temp;
  };

  tempUp(increment = 1) {
    this._temp += increment;
  };

  tempDown(decrement = 1) {
    if ((this._temp - decrement) >= this._tempMinimum) {
      this._temp -= decrement;
    };
  };

};
