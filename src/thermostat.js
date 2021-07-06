'use strict';

class Thermostat {
  constructor(defaultTemp = 20) {
    this._temp = defaultTemp;
    this._tempMinimum = 10;
    this._tempMaximum = 32;
    this._powerSaving = false;
    this._powerSavingTemp = 25;
  };

  tempDisplay() {
    return this._temp;
  };

  tempUp(increment = 1) {
    if ((this._temp + increment) <= this._checkMaxTemp()) {
    this._temp += increment;
    };
  };

  tempDown(decrement = 1) {
    if ((this._temp - decrement) >= this._tempMinimum) {
      this._temp -= decrement;
    };
  };

  isPowerSaving() {
    return this._powerSaving;
  };

  powerSavingOn() {
    this._powerSaving = true;
  };

  setTemp(degrees = defaultTemp) {
    this._temp = degrees;
  };

  _checkMaxTemp() {
    if (this.isPowerSaving) {
      return this._powerSavingTemp;
    } else {
      return this._tempMaximum;
    }
  };

};
