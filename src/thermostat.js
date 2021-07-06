'use strict';

class Thermostat {
  constructor(defaultTemp = 20) {
    this._default = defaultTemp;
    this._temp = this._default;
    this._tempMinimum = 10;
    this._tempMaximum = 32;
    this._powerSaving = true;
    this._powerSavingTemp = 25;
    this._lowEnergyBoundary = 18;
    this._mediumEnergyBoundary = 25;
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

  powerSavingOff() {
    this._powerSaving = false;
  };

  resetTemp(degrees = this._default) {
    this._temp = degrees;
  };

  energyUsage() {
    if (this._isLowEnergy()) {
      return 'low-usage';
    } else if (this._isMediumEnergy()) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    };
  };

  _checkMaxTemp() {
    if (this.isPowerSaving) {
      return this._powerSavingTemp;
    } else {
      return this._tempMaximum;
    }
  };

  _isLowEnergy() {
    return (this._temp < this._lowEnergyBoundary)
  };

  _isMediumEnergy() {
    return (this._lowEnergyBoundary < this._temp && this._temp <= this._mediumEnergyBoundary)
  };

};
